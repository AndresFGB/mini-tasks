export interface MockPermiso {
  permission_code: string;
  permission_name: string;
  description: string;
  created_at: string;
  updated_at?: string;
}

export const mockPermisos: MockPermiso[] = [
  { permission_code: "USR_V", permission_name: "USUARIOS_VER", description: "Ver listado de usuarios", created_at: "1/1/2025, 10:00:00" },
  { permission_code: "USR_C", permission_name: "USUARIOS_CREAR", description: "Crear nuevos usuarios", created_at: "1/1/2025, 10:00:00" },
  { permission_code: "USR_E", permission_name: "USUARIOS_EDITAR", description: "Editar usuarios existentes", created_at: "2/1/2025, 10:00:00" },
  { permission_code: "USR_D", permission_name: "USUARIOS_ELIMINAR", description: "Eliminar usuarios del sistema", created_at: "2/1/2025, 10:00:00" },
  { permission_code: "ROL_V", permission_name: "ROLES_VER", description: "Ver listado de roles", created_at: "3/1/2025, 10:00:00" },
  { permission_code: "ROL_C", permission_name: "ROLES_CREAR", description: "Crear nuevos roles", created_at: "3/1/2025, 10:00:00" },
  { permission_code: "ROL_E", permission_name: "ROLES_EDITAR", description: "Editar roles existentes", created_at: "4/1/2025, 10:00:00" },
  { permission_code: "ROL_D", permission_name: "ROLES_ELIMINAR", description: "Eliminar roles del sistema", created_at: "4/1/2025, 10:00:00" },
  { permission_code: "PER_V", permission_name: "PERMISOS_VER", description: "Ver listado de permisos", created_at: "5/1/2025, 10:00:00" },
  { permission_code: "PER_C", permission_name: "PERMISOS_CREAR", description: "Crear nuevos permisos", created_at: "5/1/2025, 10:00:00" },
];