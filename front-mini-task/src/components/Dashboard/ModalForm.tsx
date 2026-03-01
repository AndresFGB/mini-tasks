interface Campo {
  key: string;
  label: string;
  type?: "text" | "email" | "date" | "select";
  opciones?: { value: string; label: string }[];
}

interface Props {
  titulo: string;
  campos: Campo[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valores: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (key: string, value: any) => void;
  onGuardar: () => void;
  onCancelar: () => void;
}

export default function ModalForm({ titulo, campos, valores, onChange, onGuardar, onCancelar }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[480px] flex flex-col gap-4">
        <h2 className="text-lg font-bold text-gray-800">{titulo}</h2>

        <div className="flex flex-col gap-3">
          {campos.map((campo) => (
            <div key={campo.key} className="flex flex-col gap-1">
              <label className="text-sm text-gray-500">{campo.label}</label>
              {campo.type === "select" ? (
                <select
                  value={valores[campo.key] ?? ""}
                  onChange={(e) => onChange(campo.key, e.target.value)}
                  className="p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                >
                  <option value="">Seleccionar...</option>
                  {campo.opciones?.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={campo.type ?? "text"}
                  value={valores[campo.key] ?? ""}
                  onChange={(e) => onChange(campo.key, e.target.value)}
                  className="p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onCancelar}
            className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-sm transition"
          >
            Cancelar
          </button>
          <button
            onClick={onGuardar}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}