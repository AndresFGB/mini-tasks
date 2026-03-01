import { useEffect, useState } from "react";
import TablaGenerica from "../TablaGenerica";
import ModalForm from "../ModalForm";
import crudService from "../../../api/crudService";
import type { MockPermiso } from "../../../data/mockPermisos";

const COLUMNAS = [
  { key: "permission_code", label: "Código" },
  { key: "permission_name", label: "Nombre" },
  { key: "description", label: "Descripción" },
  { key: "created_at", label: "Fecha Creación" },
];

const CAMPOS = [
  { key: "permission_code", label: "Código (ej: USR_V)" },
  { key: "permission_name", label: "Nombre del Permiso" },
  { key: "description", label: "Descripción" },
];

const VACIO = { permission_code: "", permission_name: "", description: "" };

export default function PermisosView() {
  const [datos, setDatos] = useState<MockPermiso[]>([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>(VACIO);

  const cargar = () => crudService.getAll("permisos").then(setDatos);
  useEffect(() => { cargar(); }, []);

  const abrirCrear = () => { setForm(VACIO); setEditando(null); setModal(true); };
  const abrirEditar = (item: MockPermiso) => { setForm({ ...item }); setEditando(item.permission_code); setModal(true); };

  const guardar = async () => {
    if (editando) {
      await crudService.update("permisos", editando, form);
    } else {
      await crudService.create("permisos", { ...form, created_at: new Date().toLocaleString() });
    }
    setModal(false);
    cargar();
  };

  return (
    <>
      <TablaGenerica
        titulo="Listado de Permisos"
        columnas={COLUMNAS}
        datos={datos}
        pkKey="permission_code"
        onCrear={abrirCrear}
        onEditar={abrirEditar}
        onEliminar={(key) => crudService.delete("permisos", key).then(cargar)}
      />
      {modal && (
        <ModalForm
          titulo={editando ? "Editar Permiso" : "Nuevo Permiso"}
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