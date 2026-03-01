export interface MockRolPermiso {
  role_code: string;
  permission_code: string;
  created_at: string;
  updated_at?: string;
}

export const mockRolesPermisos: MockRolPermiso[] = [
  { role_code: "ADM", permission_code: "USR_V", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "USR_C", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "USR_E", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "USR_D", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "ROL_V", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "ROL_C", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "ROL_E", created_at: "1/1/2025, 10:00:00" },
  { role_code: "ADM", permission_code: "ROL_D", created_at: "1/1/2025, 10:00:00" },
  { role_code: "MED", permission_code: "USR_V", created_at: "1/1/2025, 10:00:00" },
  { role_code: "USR", permission_code: "USR_V", created_at: "1/1/2025, 10:00:00" },
];