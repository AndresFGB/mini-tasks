import { mockUsuarios } from "../data/mockUsuarios";
import { mockRoles } from "../data/mockRoles";
import { mockPermisos } from "../data/mockPermisos";

type Recurso = "usuarios" | "roles" | "permisos";
type PK = Record<Recurso, string>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stores: Record<Recurso, any[]> = {
  usuarios: mockUsuarios,
  roles: mockRoles,
  permisos: mockPermisos,
};

const pk: PK = {
  usuarios: "document_number",
  roles: "role_code",
  permisos: "permission_code",
};

const crudService = {
  getAll(recurso: Recurso) {
    return Promise.resolve([...stores[recurso]]);
  },

  create(recurso: Recurso, data: object) {
    const newItem = { ...data };
    stores[recurso].push(newItem);
    return Promise.resolve(newItem);
  },

  update(recurso: Recurso, key: string, data: object) {
    const store = stores[recurso];
    const index = store.findIndex((item) => item[pk[recurso]] === key);
    store[index] = { ...store[index], ...data };
    return Promise.resolve(store[index]);
  },

  delete(recurso: Recurso, key: string) {
    const store = stores[recurso];
    const index = store.findIndex((item) => item[pk[recurso]] === key);
    store.splice(index, 1);
    return Promise.resolve();
  },
};

export default crudService;
export type { Recurso };