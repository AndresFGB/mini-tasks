import type { Button } from "../../interfaces/Button";

export default function PrimaryButton({
  children,
  type = "button",
  onClick,
}: Button) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-900 to-sky-500
                 text-white py-3 rounded-lg font-semibold
                 hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}