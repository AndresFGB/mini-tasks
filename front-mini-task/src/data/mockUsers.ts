export type Role = "Admin" | "Medico" | "Usuario";

export interface MockUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "Andrés Gómez",
    email: "andres@test.com",
    password: "103374",
    role: "Admin",
  },
  {
    id: 2,
    name: "Dra. Laura Martínez",
    email: "laura@test.com",
    password: "103374",
    role: "Medico",
  },
  {
    id: 3,
    name: "Carlos Pérez",
    email: "carlos@test.com",
    password: "103374",
    role: "Usuario",
  },
];