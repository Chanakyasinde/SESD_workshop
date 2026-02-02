import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRoutes {
    public router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post("/", this.userController.createUser);
        this.router.get("/", this.userController.getAllUsers);
        this.router.get("/:id", this.userController.getUserById);
        this.router.put("/:id", this.userController.updateUser);
        this.router.delete("/:id", this.userController.deleteUser);
    }
}
