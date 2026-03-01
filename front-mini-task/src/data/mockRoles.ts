export interface MockRol {
  role_code: string;
  role_name: string;
  description: string;
  created_at: string;
  updated_at?: string;
}

export const mockRoles: MockRol[] = [
  { role_code: "ADM", role_name: "Admin", description: "Acceso total al sistema", created_at: "1/1/2025, 10:00:00" },
  { role_code: "MED", role_name: "Medico", description: "Acceso a pacientes y tareas", created_at: "1/1/2025, 10:00:00" },
  { role_code: "USR", role_name: "Usuario", description: "Acceso básico al sistema", created_at: "1/1/2025, 10:00:00" },
];