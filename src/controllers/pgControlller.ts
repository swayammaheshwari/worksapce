import { Request, Response } from "express";
import { pool } from "../db/postgressConnect";

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const query = "SELECT * FROM users WHERE id = $1";
    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(query, [name, email]);

    return res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { name, email } = req.body;
    const query =
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *";
    const { rows } = await pool.query(query, [name, email, userId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// POST /createUserTable
export const createUserTable = async (req: Request, res: Response) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )
    `);

    res.status(200).send("User table created successfully");
  } catch (error) {
    console.error("Error creating user table:", error);
    res.status(500).send("Internal Server Error");
  }
};
