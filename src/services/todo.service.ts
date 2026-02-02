import { TodoModel, TodoInterface } from "../schema/todo.schema";

export class TodoService {
    async getTask() {
        return await TodoModel.find();
    }

    createTask() {

    }

    updateTask() {

    }

    deleteTask() {

    }
}