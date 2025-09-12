// create endpoint to get player by id
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@src/lib/mongodb";
import { NAME_DB } from "@src/utils/const";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { playerId } = req.query;

    if (!playerId) {
      return res.status(400).json({ error: "Player ID is required" });
    }

    const client = await clientPromise;
    const db = client.db(NAME_DB);

    const player = await db
      .collection<Document>("players")
      .findOne({
        _id: new ObjectId(Array.isArray(playerId) ? playerId[0] : playerId),
      });

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    return res.status(200).json(player);
  } catch (error) {
    console.error("Error fetching player:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
