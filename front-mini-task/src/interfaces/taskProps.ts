export type TaskStatus = "pending" | "in_progress" | "done";

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export const TASK_STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: "pending", label: "Pendiente" },
  { value: "in_progress", label: "En progreso" },
  { value: "done", label: "Hecho" },
];