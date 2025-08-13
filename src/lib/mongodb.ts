import { MongoClient } from "mongodb";
import { NAME_DB } from "@src/utils/const";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const uri = process.env.MONGODB_URI;
const options = {
  tls: true, // Para habilitar TLS
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Para evitar problemas con la reutilización de cliente en desarrollo
  var _mongoClientPromise: Promise<MongoClient>;
}

const initializeDatabase = async (client: MongoClient) => {
  try {
    const db = client.db(NAME_DB);

    // Verifica y crea colecciones si no existen
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);

    // Crear la colección "admin" si no existe
    if (!collectionNames.includes("admin")) {
      await db.createCollection("admin");
      console.log("Colección 'admin' creada");
    }

    // Crear la colección "players" si no existe
    if (!collectionNames.includes("players")) {
      await db.createCollection("players");
      console.log("Colección 'players' creada");
    }
  } catch (error) {
    console.log("Error al inicializar la base de datos", error);
  }
};

client = new MongoClient(uri, options);

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect().then((client) => {
      initializeDatabase(client);
      return client;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect().then((client) => {
    initializeDatabase(client);
    return client;
  });
}

export default clientPromise;
