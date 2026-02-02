import { Router } from "express";
import { PostController } from "../controllers/post.controller";

export class PostRoutes {
    public router: Router;
    private postController: PostController;

    constructor() {
        this.router = Router();
        this.postController = new PostController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post("/", this.postController.createPost);
        this.router.get("/", this.postController.getAllPosts);
        this.router.get("/:id", this.postController.getPostById);
        this.router.put("/:id", this.postController.updatePost);
        this.router.delete("/:id", this.postController.deletePost);
    }
}
