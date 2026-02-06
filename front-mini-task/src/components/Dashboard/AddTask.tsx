interface Props {
  onClick: () => void;
  className?: string;
}

export default function AddTask({ onClick, className = "" }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 border-2 bg-[#0e63c1] shadow rounded-lg text-white font-semibold transition hover:bg-[#05a4ff] ${className}`}
    >
      Nueva tarea <span className="text-lg"> +</span>
    </button>
  );
}
