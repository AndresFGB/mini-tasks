import { useEffect, useState } from "react";
import TablaGenerica from "../TablaGenerica";
import ModalForm from "../ModalForm";
import crudService from "../../../api/crudService";
import type { MockUsuario } from "../../../data/mockUsuarios";

const COLUMNAS = [
  { key: "document_type", label: "Tipo Doc." },
  { key: "document_number", label: "Nro. Documento" },
  { key: "name", label: "Nombre" },
  { key: "last_name", label: "Apellido" },
  { key: "email", label: "Email" },
  { key: "role_code", label: "Rol" },
  { key: "created_at", label: "Fecha Creación" },
];

const CAMPOS = [
  { key: "document_type", label: "Tipo Documento", type: "select" as const, opciones: [{ value: "CC", label: "CC" }, { value: "TI", label: "TI" }, { value: "CE", label: "CE" }] },
  { key: "document_number", label: "Nro. Documento" },
  { key: "name", label: "Nombre" },
  { key: "last_name", label: "Apellido" },
  { key: "email", label: "Email", type: "email" as const },
  { key: "cel_number", label: "Celular" },
  { key: "birth_date", label: "Fecha Nacimiento", type: "date" as const },
  { key: "role_code", label: "Rol", type: "select" as const, opciones: [{ value: "ADM", label: "Admin" }, { value: "MED", label: "Medico" }, { value: "USR", label: "Usuario" }] },
];

const VACIO = { document_type: "", document_number: "", name: "", last_name: "", email: "", cel_number: "", birth_date: "", role_code: "" };

export default function UsuariosView() {
  const [datos, setDatos] = useState<MockUsuario[]>([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState<string | null>(null);
  const [form, setForm] = useState<Record<string, string>>(VACIO);

  const cargar = () => crudService.getAll("usuarios").then(setDatos);
  useEffect(() => { cargar(); }, []);

  const abrirCrear = () => { setForm(VACIO); setEditando(null); setModal(true); };
    const abrirEditar = (item: MockUsuario) => {
    const formStr = Object.fromEntries(
        Object.entries(item).map(([k, v]) => [k, String(v ?? "")])
    );
    setForm(formStr);
    setEditando(item.document_number);
    setModal(true);
    };

  const guardar = async () => {
    if (editando) {
      await crudService.update("usuarios", editando, form);
    } else {
      await crudService.create("usuarios", { ...form, locked: false, created_at: new Date().toLocaleString() });
    }
    setModal(false);
    cargar();
  };

  return (
    <>
      <TablaGenerica
        titulo="Listado de Usuarios"
        columnas={COLUMNAS}
        datos={datos}
        pkKey="document_number"
        onCrear={abrirCrear}
        onEditar={abrirEditar}
        onEliminar={(key) => crudService.delete("usuarios", key).then(cargar)}
      />
      {modal && (
        <ModalForm
          titulo={editando ? "Editar Usuario" : "Nuevo Usuario"}
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