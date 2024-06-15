import { Request, Response } from "express";
import { client } from "../db/redisConnect";

export const getRedisData = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name || typeof name !== "string") throw new Error("Invalid input");

    const data = await client.get(name);
    res.send(`data: ${data}`);
  } catch (error) {
    res.status(500).send(`Error occurred while saving data to redis: ${error}`);
  }
};

export const saveRedisData = async (req: Request, res: Response) => {
  const key = `user_${req.params.key}`;
  const value = JSON.stringify(req.body);

  try {
    let result = await client.set(key, value);

    if (!result) {
      return res.json({ message: "Failed to set user information." });
    } else {
      return res.json({
        message: "User Information has been saved successfully.",
      });
    }
  } catch (err) {
    console.error("Error:", err);
    return res.status(400).json({ message: "Bad request!" });
  }
};

export const getRedisDataByKey = async (req: Request, res: Response) => {
  const id = req.params.id;
  const key = `user_${id}`;
  try {
    const data = await client.get(key);
    if (!data) {
      return res
        .status(404)
        .json({ message: `No Data found for the given User ID: ${id}` });
    } else {
      const parsedData = JSON.parse(data);
      return res.status(200).json(parsedData);
    }
  } catch (error) {
    console.error("Error fetching data from Redis:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const saveRedisKeyValue = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Both name and email are required." });
    }

    await client.set(name, email);
    res.send("data saved successfully");
  } catch (error) {
    res.status(500).send(`Error occurred while saving data to redis: ${error}`);
  }
};
