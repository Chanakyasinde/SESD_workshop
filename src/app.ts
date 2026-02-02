import express from "express";
import mongoose from "mongoose";

interface App_Interface {
    startServer(): void;
    connectDatabase(): void;
    initializeRoutes(): void;
}

export default class App implements App_Interface {

    PORT: number | string;
    app: express.Application;   // express app

    constructor() {
        this.PORT = 4000;
        this.app = express();

        this.startServer();
        this.connectDatabase();
        this.initializeRoutes();
    }

    startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log(`Server running on Port: ${this.PORT}`);
        })
    }
    async connectDatabase(): Promise<void> {
        try {
            await mongoose.connect("")
            console.log("Database Connected")
        } catch(err) {
            console.error(err);
        }
    }
    initializeRoutes(): void {
        this.app.use(express.json())
    }
}

