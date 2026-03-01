import { useState } from "react";

export interface Columna {
  key: string;
  label: string;
}

interface Props {
  titulo: string;
  columnas: Columna[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  datos: any[];
  pkKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEditar: (item: any) => void;
  onEliminar: (key: string) => void;
  onCrear: () => void;
}

const POR_PAGINA = 5;

export default function TablaGenerica({ titulo, columnas, datos, pkKey, onEditar, onEliminar, onCrear }: Props) {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(datos.length / POR_PAGINA);
  const datosPagina = datos.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{titulo}</h2>
        <button
          onClick={onCrear}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          + Nuevo
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200">
              {columnas.map((col) => (
                <th key={col.key} className="py-3 px-4 text-gray-500 font-medium">{col.label}</th>
              ))}
              <th className="py-3 px-4 text-gray-500 font-medium">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {datosPagina.map((item) => (
              <tr key={item[pkKey]} className="border-b border-gray-100 hover:bg-gray-50">
                {columnas.map((col) => (
                  <td key={col.key} className="py-3 px-4 text-gray-700">
                    {String(item[col.key] ?? "")}
                  </td>
                ))}
                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => onEditar(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-600 transition"
                  >✏️</button>
                  <button
                    onClick={() => onEliminar(item[pkKey])}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-red-600 transition"
                  >🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Mostrando {(pagina - 1) * POR_PAGINA + 1}–{Math.min(pagina * POR_PAGINA, datos.length)} de {datos.length} registros</span>
        <div className="flex gap-1">
          <button
            onClick={() => setPagina((p) => Math.max(p - 1, 1))}
            disabled={pagina === 1}
            className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40"
          >Anterior</button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPagina(n)}
              className={`px-3 py-1 rounded-lg border transition ${pagina === n ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 hover:bg-gray-100"}`}
            >{n}</button>
          ))}
          <button
            onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
            disabled={pagina === totalPaginas}
            className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40"
          >Siguiente</button>
        </div>
      </div>
    </div>
  );
}