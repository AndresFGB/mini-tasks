import { useEffect, useState } from "react";
import {
  TASK_STATUS_OPTIONS,
  type Task,
  type TaskStatus,
} from "../../interfaces/taskProps";

type Props = {
  open: boolean;
  mode: "create" | "edit";
  initialData?: Task;
  onClose: () => void;
  onSubmit: (task: Task) => void;
};

export default function TaskModal({
  open,
  mode,
  initialData,
  onClose,
  onSubmit,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setStatus(initialData.status);
    }
    if (mode === "create") {
      setTitle("");
      setDescription("");
      setStatus("pending");
    }
  }, [initialData, mode, open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: initialData?.id,
      title,
      description,
      status,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[450px] rounded-xl shadow-2xl p-8">
        <h2 className="text-xl font-semibold mb-6">
          {mode === "create" ? "Nueva tarea" : "Editar tarea"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            className="p-3 border rounded-lg"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            required
            className="p-3 border rounded-lg"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="p-3 border rounded-lg"
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
          >
            {TASK_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              {mode === "create" ? "Crear" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
