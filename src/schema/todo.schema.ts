import { Schema, Document, model } from "mongoose";

export interface TodoInterface extends Document {
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}

const TodoSchema = new Schema<TodoInterface>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const TodoModel = model("post", TodoSchema);