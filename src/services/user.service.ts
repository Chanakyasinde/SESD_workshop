import User, { IUser } from "../models/user.model";

export class UserService {

    async createUser(data: Partial<IUser>): Promise<IUser> {
        return await User.create(data);
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id);
    }
}
