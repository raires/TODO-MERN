import express from "express";
import { getTodos, createTodo, updateTodo, getTodo, deleteTodo } from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;