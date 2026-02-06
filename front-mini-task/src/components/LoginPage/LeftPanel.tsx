export default function LeftPanel() {
  return (
    <div
      className="w-1/2 p-12 flex flex-col justify-center
                    bg-gradient-to-br from-blue-900 to-sky-500 text-white"
    >
      <h1 className="text-4xl font-bold mt-8 leading-tight">
        Hola,
        <br />
        Bienvenido!
      </h1>

      <p className="mt-6 text-sm opacity-90 max-w-xs">
        Empieza aquí
        <br />
        Crea tu cuenta y gestiona tus tareas fácilmente.
      </p>
    </div>
  );
}
