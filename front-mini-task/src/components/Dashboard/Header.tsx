import { useNavigate } from "react-router-dom";
import type { Props } from "../../interfaces/Props";
import AddTask from "./AddTask";
import authService from "../../services/authService";

export default function Header({onNewTask, userName}: Props) {
  const navigate = useNavigate();
  

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };


  return (
    <div className="  flex flex-col md:flex-row
  md:items-center
  md:justify-between
  gap-4 md:gap-0">
      <div className=" py-3  text-lg font-medium ">Hola, {userName}</div>

     <AddTask onClick={onNewTask}  className="ml-10" />
     <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline bg-[#5966839f] px-5 py-2 border-2"
        >
          Logout
        </button>
    </div>
  );
}
