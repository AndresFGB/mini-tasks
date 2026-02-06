import type { Task } from "../interfaces/taskProps";
import api from "../services/api";

export const taskService = {
  getAll: async (): Promise<Task[]> => {
    const { data } = await api.get("/tasks");
    return data;
  },

  create: async (task: Omit<Task, "id">): Promise<Task> => {
    const { data } = await api.post("/tasks", task);
    return data;
  },

  update: async (task: Task): Promise<Task> => {
    const { data } = await api.put(`/tasks/${task.id}`, task);
    return data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },
};