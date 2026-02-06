import LeftPanel from "../components/LoginPage/LeftPanel";
import RightPanel from "../components/LoginPage/RightPanel";
import LoginBackground from "../layouts/LoginBackground";

export default function Register() {
  return (
    <LoginBackground>
      <div className="w-[900px] h-[520px] bg-gray-100 rounded-2xl shadow-2xl flex overflow-hidden">
        <LeftPanel />
        <RightPanel mode="register"/>
      </div>
    </LoginBackground>
  );
}
