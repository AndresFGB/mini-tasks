import type { Input } from "../../interfaces/Input";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}: Input) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg border border-gray-200
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}