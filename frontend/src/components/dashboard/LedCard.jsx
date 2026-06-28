function LedCard({
  title,
  isOn,
  onToggle,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 text-center shadow-lg">

      <h2 className="text-xl font-semibold mb-4">
        💡 {title}
      </h2>

      <div
        className={`w-16 h-16 rounded-full mx-auto transition-all duration-300 ${
          isOn
            ? "bg-green-500 shadow-[0_0_25px_#22c55e]"
            : "bg-gray-600"
        }`}
      />

      <button
        onClick={onToggle}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2"
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

      <p className="mt-3 text-slate-400">
        LED is {isOn ? "ON" : "OFF"}
      </p>

    </div>
  );
}

export default LedCard;