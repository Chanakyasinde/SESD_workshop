import { TodoModel, TodoInterface } from "../schema/todo.schema";

export class TodoService {

    async createTask(data: Partial<TodoInterface>) {
        return await TodoModel.create(data);
    }

    async getTask() {
        return await TodoModel.find();
    }

    async getTaskById(id: string) {
        return await TodoModel.findById(id);
    }

    async updateTask(id: string, data: Partial<TodoInterface>) {
        return await TodoModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteTask(id: string) {
        return await TodoModel.findByIdAndDelete(id);
    }
}