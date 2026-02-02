import express from "express";
import mongoose from "mongoose";
import { UserRoutes } from "./routes/user.routes";
import { TodoRoutes } from "./routes/todo.routes";
import dotenv from "dotenv";

dotenv.config();

interface App_Interface {
    startServer(): void;
    connectDatabase(): void;
    initializeRoutes(): void;
}

export default class App implements App_Interface {

    PORT: number | string;
    app: express.Application;
    public userRoutes!: UserRoutes;
    public todoRoutes!: TodoRoutes;

    constructor() {
        this.PORT = process.env.PORT || 4000;
        this.app = express();

        this.connectDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
    }

    public startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log(`Server running on Port: ${this.PORT}`);
        })
    }

    async connectDatabase(): Promise<void> {
        try {
            const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/sesd_workshop1";
            await mongoose.connect(mongoURI);
            console.log("Database Connected Successfully");
        } catch (err) {
            console.error("Database Connection Failed:", err);
        }
    }

    initializeRoutes(): void {
        this.userRoutes = new UserRoutes();
        this.todoRoutes = new TodoRoutes();

        this.app.use("/api/users", this.userRoutes.router);
        this.app.use("/posts", this.todoRoutes.router);

        this.app.get("/", (req, res) => {
            res.send("Server is running!");
        });
    }
}
