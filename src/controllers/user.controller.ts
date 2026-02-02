import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.getUserById(req.params.id as string);
            if (!user) {
                res.status(404).json({ message: "User not found" });
                return;
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.updateUser(req.params.id as string, req.body);
            if (!user) {
                res.status(404).json({ message: "User not found" });
                return;
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.deleteUser(req.params.id as string);
            if (!user) {
                res.status(404).json({ message: "User not found" });
                return;
            }
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
