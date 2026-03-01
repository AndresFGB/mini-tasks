import { useState } from "react";
import SideBar from "./SideBar";
import UsuariosView from "./views/UsuariosView";
import RolesView from "./views/RolesView";
import PermisosView from "./views/PermisosView";
import DashboardHome from "./views/DashboardHome";

type Vista = "dashboard" | "usuarios" | "roles" | "permisos";

export default function DashboardCard() {
  const [vista, setVista] = useState<Vista>("dashboard");

  const renderVista = () => {
    if (vista === "usuarios") return <UsuariosView />;
    if (vista === "roles") return <RolesView />;
    if (vista === "permisos") return <PermisosView />;
    return <DashboardHome />;
  };

  return (
    <div className="w-[95vw] h-[95vh] bg-secondary rounded-2xl shadow-2xl p-8 flex gap-4">
      <SideBar onNavegar={(vista) => setVista(vista as Vista)} />
      <main className="flex-1 overflow-auto">{renderVista()}</main>

    </div>
  );
}