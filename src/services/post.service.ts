import Post, { IPost } from "../models/post.model";

export class PostService {

    // Create Post
    async createPost(data: Partial<IPost>) {
        return await Post.create(data);
    }

    // Get All Posts
    async getAllPosts() {
        return await Post.find();
    }

    // Get Single Post
    async getPostById(id: string) {
        return await Post.findById(id);
    }

    // Update Post
    async updatePost(id: string, data: Partial<IPost>) {
        return await Post.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete Post
    async deletePost(id: string) {
        return await Post.findByIdAndDelete(id);
    }
}