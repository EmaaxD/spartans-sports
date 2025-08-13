// endpoint to get players
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@src/lib/mongodb";
import { NAME_DB } from "@src/utils/const";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db(NAME_DB);
    const players = await db.collection("players").find({}).toArray();

    return res.status(200).json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Error fetching players" });
  }
}
