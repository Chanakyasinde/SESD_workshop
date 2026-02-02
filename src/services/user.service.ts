import User, { IUser } from "../models/user.model";

export class UserService {

    // Create User
    async createUser(data: Partial<IUser>): Promise<IUser> {
        return await User.create(data);
    }

    // Get All Users
    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    // Get User By ID
    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    // Update User
    async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete User
    async deleteUser(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id);
    }
}
