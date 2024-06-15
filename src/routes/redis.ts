import { Router } from "express";
import {
  getRedisData,
  saveRedisData,
  getRedisDataByKey,
  saveRedisKeyValue,
} from "../controllers/redisController";

const router = Router();

router.get("/redis", getRedisData);
router.post("/saveRedisData/:key", saveRedisData);
router.get("/getRedisDataByKey/:id", getRedisDataByKey);
router.post("/redis", saveRedisKeyValue);

export default router;
