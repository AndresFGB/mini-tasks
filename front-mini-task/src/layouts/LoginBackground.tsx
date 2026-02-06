import type { ReactNode } from "react";


interface Props{
    children:ReactNode;
}

export default function LoginBackground({ children }:Props) {
  return (
   <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0560d5 0%, #05a4ff 40%, #0a2fb1 100%)"
      }}
    >
      {children}
    </div>
  );
}
