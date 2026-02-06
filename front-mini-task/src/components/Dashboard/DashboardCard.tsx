import { useEffect, useMemo, useState } from "react";
import CardView from "./CardView";
import Header from "./Header";
import type { Task } from "../../interfaces/taskProps";
import { useTaskModal } from "../../hook/useTaskModal";
import TaskModal from "./TaskModal";
import { taskService } from "../../services/taskService";
import authService from "../../services/authService";

type Filter = "all" | "pending" | "in_progress" | "done";

export default function DashboardCard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [userName, setUserName] = useState("");

  const taskModal = useTaskModal();

  const filteredTasks = useMemo(() => {
    if (filter === "all") return tasks;
    return tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  const action = {
    onEdit: taskModal.openEditModal,
    onDelete: async (id?: number) => {
      if (!id) return;

      try {
        await taskService.deleteTask(id);
        setTasks((prev) => prev.filter((t) => t.id !== id));
      } catch (err) {
        console.error("Error eliminando tarea", err);
      }
    },
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await authService.me();
        setUserName(user.name);
      } catch {
        console.log("No autenticado");
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await taskService.getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Error cargando tareas", err);
      }
    };

    loadTasks();
  }, []);

  return (
    <div
      className=" w-[95vw] md:w-[90vw] lg:w-[85vw]
  h-[90vh] md:h-[88vh] lg:h-[85vh]
  max-w-[1300px]
  bg-gray-100 rounded-2xl shadow-2xl
  p-4 md:p-6 lg:p-8
  flex flex-col"
    >
      <Header onNewTask={taskModal.openCreateModal} userName={userName} />

      <div
        className=" flex flex-col lg:flex-row
  lg:items-center
  gap-6 mt-8"
      >
        <h2 className="text-2xl font-semibold">Tu Lista</h2>

        <div className="flex flex-wrap gap-3">
          {[
            { label: "Todos", value: "all" },
            { label: "Pendiente", value: "pending" },
            { label: "En progreso", value: "in_progress" },
            { label: "Hecho", value: "done" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value as Filter)}
              className={`px-4 py-2 rounded-lg shadow transition
        ${
          filter === f.value
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-blue-600 hover:text-white"
        }
      `}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <CardView
        tasks={filteredTasks}
        action={action}
        onCreate={taskModal.openCreateModal}
      />

      <TaskModal
        open={taskModal.open}
        mode={taskModal.mode}
        initialData={taskModal.selectedTask}
        onClose={taskModal.closeModal}
        onSubmit={async (task) => {
          try {
            if (taskModal.mode === "create") {
              const newTask = await taskService.createTask(task);
              setTasks((prev) => [newTask, ...prev]);
            }
            if (taskModal.mode === "edit") {
              const updatedTask = await taskService.updateTask(task);
              setTasks((prev) =>
                prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
              );
            }

            taskModal.closeModal();
          } catch (err) {
            console.error("Error guardando tarea", err);
          }
        }}
      />
    </div>
  );
}
