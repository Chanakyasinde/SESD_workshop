import { Schema, Document, model } from "mongoose";

export interface TodoInterface extends Document {
    title: String;

}

const TodoSchema = new Schema<TodoInterface>({title: String})

export const TodoModel = model("task", TodoSchema);