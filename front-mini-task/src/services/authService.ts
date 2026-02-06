
import api from "./api";

const authService = {
   async me() {
    const { data } = await api.get("/me"); 
    return data;
  },

  async login(email: string, password: string) {
    const res = await api.post("/login", { email, password });
    return res.data;
  },

  async register(name: string, email: string, password: string) {
    const res = await api.post("/register", { name, email, password });
    return res.data;
  },

  logout() {
  localStorage.removeItem("token");
}
};

export default authService;
