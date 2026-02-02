import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";

export class TodoRoutes {
    public router: Router;
    private todoController: TodoController;

    constructor() {
        this.router = Router();
        this.todoController = new TodoController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post("/", this.todoController.createTask);
        this.router.get("/", this.todoController.getAllTaskRoute);
        this.router.get("/:id", this.todoController.getTaskById);
        this.router.put("/:id", this.todoController.updateTask);
        this.router.delete("/:id", this.todoController.deleteTask);
    }
}
