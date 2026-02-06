import { useState } from "react";
import type { Task } from "../interfaces/taskProps";

type Mode = "create" | "edit";

export function useTaskModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("create");
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  const openCreateModal = () => {
    setMode("create");
    setSelectedTask(undefined);
    setOpen(true);
  };

  const openEditModal = (task: Task) => {
    setMode("edit");
    setSelectedTask(task);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  return {
    open,
    mode,
    selectedTask,
    openCreateModal,
    openEditModal,
    closeModal,
  };
}
