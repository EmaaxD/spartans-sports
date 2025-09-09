import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import { promisify } from "util";

// Configurar multer para manejar archivos en memoria
const upload = multer({
  storage: multer.memoryStorage(),
});
const uploadMiddleware = promisify(upload.single("file"));

// Configurar cliente S3
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error("AWS credentials are not defined");
}

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

interface NextApiRequestWithFile extends NextApiRequest {
  file?: Express.Multer.File;
}

export default async function handler(
  req: NextApiRequestWithFile,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
  }

  try {
    // Procesar el archivo con multer
    await uploadMiddleware(req as any, res as any);

    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No se envió ningún archivo" });
    }

    // Configurar el nombre y parámetros del archivo en S3
    const objectKey = `uploads/${Date.now()}_${file.originalname}`;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: objectKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    // Subir el archivo a S3
    const command = new PutObjectCommand(params);
    await s3.send(command);

    // Generar la URL pública del archivo
    const url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${objectKey}`;

    res.status(200).json({
      message: "Archivo subido con éxito",
      url,
    });
  } catch (error: any) {
    console.error("Error al subir archivo:", error);
    res.status(500).json({ error: `Error al subir archivo: ${error.message}` });
  }
}

export const config = {
  api: {
    bodyParser: false, // Necesario para que multer funcione
  },
};
