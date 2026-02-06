import Card from "./Card";
import AddTask from "./AddTask";
import type { CardViewProps } from "../../interfaces/Props";

export default function CardView({ tasks, action, onCreate }: CardViewProps) {
  return (
    <div className="flex-1 mt-6 flex flex-col min-h-0">
      <div className=" hidden md:grid
  grid-cols-4 bg-white p-4 rounded-lg shadow font-semibold text-center">
        <span>Nombre</span>
        <span>Descripción</span>
        <span>Estado</span>
        <span>Acciones</span>
      </div>

      <div className="flex-1 mt-4 bg-white rounded-xl border-2 border-gray-200 p-6 overflow-y-auto min-h-0">
        {tasks.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
            <p className="text-lg text-center">
              No hay tareas aún <br />
              agrega tu primera tarea
            </p>
            <AddTask onClick={onCreate}/>
          </div>
        ) : (
          <div className="space-y-4 items-center">
            {tasks.map((task) => (
              <Card key={task.id} task={task} action={action} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
