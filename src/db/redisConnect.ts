import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient();

// Handle connection errors
client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

const connectToRedis = async () => {
  try {
    client.on("connect", () => console.log("Connected to Redis"));
    await client.connect();
  } catch (error) {
    console.error("Error connecting to Redis", error);
  }
};

export { connectToRedis, client };
