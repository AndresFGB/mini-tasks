import api from "./api";
import type { Task } from "../interfaces/taskProps";

export const taskService = {
  async getTasks(): Promise<Task[]> {
    const res = await api.get("/tasks");
    return res.data;
  },

  async deleteTask(id: number): Promise<void> {
    await api.delete(`/tasks/${id}`);
  },

  async createTask(task: Task): Promise<Task> {
    const res = await api.post("/tasks", task);
    return res.data;
  },

  async updateTask(task: Task): Promise<Task> {
    const res = await api.put(`/tasks/${task.id}`, task);
    return res.data;
  },
};
