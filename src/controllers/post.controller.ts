import { PostService } from "../services/post.service";
import { Request, Response } from "express";

export class PostController {
    private postService: PostService;

    constructor() {
        this.postService = new PostService();
    }

    createPost = async (req: Request, res: Response): Promise<void> => {
        try {
            const post = await this.postService.createPost(req.body);
            res.status(201).json(post);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getAllPosts = async (req: Request, res: Response): Promise<void> => {
        try {
            const posts = await this.postService.getAllPosts();
            res.json(posts);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getPostById = async (req: Request, res: Response): Promise<void> => {
        try {
            const post = await this.postService.getPostById(req.params.id as string);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(post);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    updatePost = async (req: Request, res: Response): Promise<void> => {
        try {
            const post = await this.postService.updatePost(req.params.id as string, req.body);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(post);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    deletePost = async (req: Request, res: Response): Promise<void> => {
        try {
            const post = await this.postService.deletePost(req.params.id as string);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json({ message: "Post deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}