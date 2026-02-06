import type { CardProps } from "../../interfaces/Props";

export default function Card({ task, action }: CardProps) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    in_progress: "bg-orange-100 text-orange-700",
    done: "bg-green-100 text-green-700",
  };

  const statusText = {
    pending: "Pendiente",
    in_progress: "En progreso",
    done: "Hecho",
  };

  return (
    <div
      className="
  grid grid-cols-1 md:grid-cols-4
  gap-3 md:gap-0
  md:items-center
  bg-gray-50 p-4 rounded-lg hover:shadow transition
"
    >
      {" "}
      <span className="font-medium">{task.title}</span>
      <span className="text-gray-600">{task.description}</span>
      <span
        className={`px-3 py-1 rounded-full text-sm w-fit ${statusColors[task.status]}`}
      >
        {statusText[task.status]}
      </span>
      <div className="flex gap-3 justify-end">
        <button
          onClick={() => action.onEdit(task)}
          className="text-blue-600 hover:underline text-sm"
        >
          Editar
        </button>

        <button
          onClick={() => action.onDelete(task.id)}
          className="text-red-500 hover:underline text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
