import { TodoService } from "../services/todo.service";
import { Request, Response } from "express";

export class TodoController {
    private todoService: TodoService;

    constructor() {
        this.todoService = new TodoService();
    }

    createTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const task = await this.todoService.createTask(req.body);
            res.status(201).json(task);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getAllTaskRoute = async (req: Request, res: Response): Promise<void> => {
        try {
            const tasks = await this.todoService.getTask();
            res.json(tasks);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getTaskById = async (req: Request, res: Response): Promise<void> => {
        try {
            const task = await this.todoService.getTaskById(req.params.id as string);
            if (!task) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(task);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    updateTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const task = await this.todoService.updateTask(req.params.id as string, req.body);
            if (!task) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(task);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    deleteTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const task = await this.todoService.deleteTask(req.params.id as string);
            if (!task) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json({ message: "Post deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}