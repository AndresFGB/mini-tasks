import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LoginBackground({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-primary">
      {children}
    </div>
  );
}