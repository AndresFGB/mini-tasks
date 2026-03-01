const tips = [
  { titulo: "Hidratación", texto: "No olvides beber 2 litros de agua al día para mantenerte saludable." },
  { titulo: "Consejo Nutricional", texto: "Incorpora más verduras de hoja verde a tus comidas." },
  { titulo: "Actividad Física", texto: "30 minutos de caminata diaria mejoran tu salud cardiovascular." },
];

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-4 h-full">

      {/* Tips de Bienestar */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4 items-start">
        <div className="text-4xl">🧘</div>
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Tips de Bienestar</h2>
            <span className="text-xl">🏃‍♂️🥗💧</span>
          </div>
          {tips.map((tip, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-gray-700">{tip.titulo}:</p>
              <p className="text-sm text-gray-600">{tip.texto}</p>
              {i < tips.length - 1 && <hr className="mt-2 border-gray-200" />}
            </div>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Red de Servicios</h2>
          <p className="text-sm text-gray-500">Puntos de atención disponibles</p>
        </div>
        <img
          src="https://i.ibb.co/Y715dHy6/Gemini-Generated-Image-tdrbfstdrbfstdrb.png"
          alt="Puntos de atención"
          className="w-full object-cover object-top"
          style={{ maxHeight: "calc(100% - 72px)" }}
        />
      </div>

    </div>
  );
}