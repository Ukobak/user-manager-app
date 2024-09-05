import { User } from "../types/types";
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Пробрасываем ошибку дальше
    }
}

export const addUser = async (user: User): Promise<User> => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}

export const updateUser = async (user: User): Promise<User> => {
    try {
        const response = await axios.put(`${API_URL}/${user.id}`, user);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

export const deleteUser = async (id: number): Promise<void> => {
    console.log(typeof id)
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}