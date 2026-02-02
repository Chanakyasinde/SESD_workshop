import express from "express";
import mongoose from "mongoose";
import { UserRoutes } from "./routes/user.routes";
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

    constructor() {
        this.PORT = process.env.PORT || 4000;
        this.app = express();

        this.connectDatabase(); // Connect DB first
        this.initializeMiddlewares();
        this.initializeRoutes();
        // Start server is called from server.ts usually, but keeping constructor structure as before essentially
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
            // process.exit(1); // Optional: Exit if DB fails
        }
    }

    initializeRoutes(): void {
        this.userRoutes = new UserRoutes();
        this.app.use("/api/users", this.userRoutes.router);

        // Root route for sanity check
        this.app.get("/", (req, res) => {
            res.send("Server is running!");
        });
    }
}
