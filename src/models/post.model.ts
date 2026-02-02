import { Schema, Document, model } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}

const PostSchema = new Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default model("Post", PostSchema);