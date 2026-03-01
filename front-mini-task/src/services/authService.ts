import { mockUsers } from "../data/mockUsers";

const authService = {
  async me() {
    const stored = localStorage.getItem("user");
    if (stored) return JSON.parse(stored);
    return null;
  },

  async login(email: string, password: string) {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) throw new Error("Credenciales inválidas");

    const { password: _, ...safeUser } = user;
    localStorage.setItem("user", JSON.stringify(safeUser));
    return { token: "token-ficticio-para-ingresar", user: safeUser };
  },

  async register(name: string, email: string, password: string) {
    return { token: "token-ficticio-para-ingresar" };
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

export default authService;