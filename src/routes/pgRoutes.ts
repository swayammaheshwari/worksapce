import { Router } from "express";
import {
  createUserTable,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/pgControlller";

const router = Router();

router.post("/usersBypg/createUserTable", createUserTable);

router.get("/usersBypg/:id", getUserById);

router.post("/usersBypg/", createUser);

router.put("/usersBypg/:id", updateUser);

router.delete("/usersBypg/:id", deleteUser);

export default router;
