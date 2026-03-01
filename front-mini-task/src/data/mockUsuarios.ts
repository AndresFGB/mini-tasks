export interface MockUsuario {
  document_type: string;
  document_number: string;
  role_code: string;
  name: string;
  last_name: string;
  email: string;
  cel_number: string;
  birth_date: string;
  locked: boolean;
  created_at: string;
  updated_at?: string;
}

export const mockUsuarios: MockUsuario[] = [
  { document_type: "CC", document_number: "123456789", role_code: "ADM", name: "Andrés", last_name: "Gómez", email: "andres@test.com", cel_number: "3001234567", birth_date: "1990-05-15", locked: false, created_at: "1/1/2025, 10:00:00" },
  { document_type: "CC", document_number: "987654321", role_code: "MED", name: "Laura", last_name: "Martínez", email: "laura@test.com", cel_number: "3109876543", birth_date: "1985-08-22", locked: false, created_at: "2/1/2025, 11:00:00" },
  { document_type: "TI", document_number: "112233445", role_code: "USR", name: "Carlos", last_name: "Pérez", email: "carlos@test.com", cel_number: "3201122334", birth_date: "2000-03-10", locked: false, created_at: "3/1/2025, 12:00:00" },
];