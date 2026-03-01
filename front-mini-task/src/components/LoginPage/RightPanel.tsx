import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

interface Props {
  mode: "login" | "register";
}

export default function RightPanel({ mode }: Props) {
  const isLogin = mode === "login";
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await authService.login(email, password);
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/dashboard");
      } else {
        await authService.register(name, email, password);
        alert("Cuenta creada ahora inicia sesión");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Error en autenticación");
    }
  };

  return (
    <div className="w-1/2 p-12 flex items-center">
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        {!isLogin && (
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogin && (
          <div className="flex justify-end text-sm">
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
          </div>
        )}
        <button className="w-full bg-accent py-3 rounded-lg font-semibold hover:opacity-90 transition text-gray-700">
          {isLogin ? "Ingresar" : "Crear cuenta"}
        </button>
        <p className="text-center text-sm mt-2">
          {isLogin ? "Aún no tienes cuenta?" : "Ya tienes cuenta?"}
        </p>
        <button
          type="button"
          onClick={() => navigate(isLogin ? "/register" : "/login")}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          {isLogin ? "Registrarse" : "Ingresar"}
        </button>
      </form>
    </div>
  );
}