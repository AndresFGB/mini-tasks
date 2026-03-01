import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import type { Role } from "../../data/mockUsers";

interface Props {
  onNavegar: (vista: string) => void;
}

const menuByRole: Record<Role, { id: number; label: string }[]> = {
  Admin:   [{ id: 1, label: "Dashboard" }, { id: 2, label: "Usuarios" }, { id: 3, label: "Roles" }, { id: 4, label: "Permisos" }],
  Medico:  [{ id: 1, label: "Dashboard" }, { id: 2, label: "Mis Pacientes" }, { id: 3, label: "Tareas" }],
  Usuario: [{ id: 1, label: "Dashboard" }, { id: 2, label: "Mis Tareas" }],
};

export default function SideBar({ onNavegar }: Props) {
  const [user, setUser] = useState<{ name: string; role: Role } | null>(null);
  const [activeId, setActiveId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => { authService.me().then(setUser); }, []);

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const menuItems = user ? menuByRole[user.role] : [];

  return (
    <aside className="w-64 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold text-primary px-4">
          Hola, {user?.name ?? "..."}
        </p>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveId(item.id); onNavegar(item.label.toLowerCase()); }}
              className={`text-left px-4 py-3 rounded-lg transition-colors ${
                activeId === item.id
                  ? "bg-primary text-white font-medium"
                  : "text-gray-600 hover:bg-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="text-left px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors font-medium"
      >
        Cerrar sesión
      </button>
    </aside>
  );
}