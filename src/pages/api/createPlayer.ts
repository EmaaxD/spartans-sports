// endpoint to create a new player in the database
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@src/lib/mongodb";
import { NAME_DB } from "@src/utils/const";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db(NAME_DB);

      const data = req.body;

      console.log("� Saving player to database:", {
        name: data.nombre,
        hasImage: !!data.playerImg,
        imageUrl: data.playerImg ? data.playerImg.substring(0, 50) + "..." : null
      });

      const result = await db.collection("players").insertOne(data);

      if (result.acknowledged) {
        const player = await db
          .collection("players")
          .findOne({ _id: result.insertedId });

        console.log("✅ Player created successfully in database");

        return res.status(201).json({
          status: "success",
          message: "Jugador creado correctamente",
          data: player,
        });
      }
    } catch (error) {
      console.error("❌ Error creating player:", error);
      return res.status(500).json({
        status: "error",
        message: "Error al crear el jugador",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  } else {
    return res.status(405).json({
      status: "error",
      message: "Método no permitido",
    });
  }
}
