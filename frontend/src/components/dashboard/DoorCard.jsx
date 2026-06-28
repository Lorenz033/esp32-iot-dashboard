function DoorCard({ isOpen, onToggle }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center max-w-sm mx-auto">

      <h2 className="text-2xl font-bold mb-4">
        🚪 Main Door
      </h2>

      <div className="text-6xl mb-4">
        {isOpen ? "🚪" : "🔒"}
      </div>

      <p className="text-xl font-semibold mb-6">
        Status:
        <span
          className={`ml-2 ${
            isOpen ? "text-green-400" : "text-red-400"
          }`}
        >
          {isOpen ? "OPEN" : "CLOSED"}
        </span>
      </p>

      <button
        onClick={onToggle}
        className={`w-full rounded-xl py-3 font-semibold transition
          ${
            isOpen
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
      >
        {isOpen ? "Close Door" : "Open Door"}
      </button>

    </div>
  );
}

export default DoorCard;