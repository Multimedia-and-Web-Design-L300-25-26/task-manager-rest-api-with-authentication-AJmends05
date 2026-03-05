import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// All routes below require authentication
router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.delete("/:id", protect, deleteTask);

export default router;