import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

process.env.PGSSLMODE = "disable";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const connectToPostgres = async (): Promise<void> => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
};

export { connectToPostgres, pool };
