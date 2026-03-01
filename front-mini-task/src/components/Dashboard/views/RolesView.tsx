import { useEffect, useState } from "react";
import TablaGenerica from "../TablaGenerica";
import ModalForm from "../ModalForm";
import crudService from "../../../api/crudService";
import type { MockRol } from "../../../data/mockRoles";

const COLUMNAS = [
  { key: "role_code", label: "Código" },
  { key: "role_name", label: "Nombre" },
  { key: "description", label: "Descripción" },
  { key: "created_at", label: "Fecha Creación" },
];

const CAMPOS = [
  { key: "role_code", label: "Código (ej: ADM)" },
  { key: "role_name", label: "Nombre del Rol" },
  { key: "description", label: "Descripción" },
];

const VACIO = { role_code: "", role_name: "", description: "" };

export default function RolesView() {
  const [datos, setDatos] = useState<MockRol[]>([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>(VACIO);

  const cargar = () => crudService.getAll("roles").then(setDatos);
  useEffect(() => { cargar(); }, []);

  const abrirCrear = () => { setForm(VACIO); setEditando(null); setModal(true); };
  const abrirEditar = (item: MockRol) => { setForm({ ...item }); setEditando(item.role_code); setModal(true); };

  const guardar = async () => {
    if (editando) {
      await crudService.update("roles", editando, form);
    } else {
      await crudService.create("roles", { ...form, created_at: new Date().toLocaleString() });
    }
    setModal(false);
    cargar();
  };

  return (
    <>
      <TablaGenerica
        titulo="Listado de Roles"
        columnas={COLUMNAS}
        datos={datos}
        pkKey="role_code"
        onCrear={abrirCrear}
        onEditar={abrirEditar}
        onEliminar={(key) => crudService.delete("roles", key).then(cargar)}
      />
      {modal && (
        <ModalForm
          titulo={editando ? "Editar Rol" : "Nuevo Rol"}
          campos={CAMPOS}
          valores={form}
          onChange={(key, value) => setForm((prev) => ({ ...prev, [key]: value }))}
          onGuardar={guardar}
          onCancelar={() => setModal(false)}
        />
      )}
    </>
  );
}