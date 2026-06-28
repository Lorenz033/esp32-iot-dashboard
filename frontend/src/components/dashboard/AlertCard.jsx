function AlertCard({ title, level }) {

  const config = {
    safe: {
      color: "bg-green-500",
      shadow: "shadow-[0_0_20px_#22c55e]",
      status: "SAFE",
      animation: "",
    },

    warning: {
      color: "bg-yellow-400",
      shadow: "shadow-[0_0_20px_#facc15]",
      status: "WARNING",
      animation: "",
    },

    danger: {
      color: "bg-red-500",
      shadow: "shadow-[0_0_20px_#ef4444]",
      status: "DANGER",
      animation: "animate-pulse",
    },
  };

  const current = config[level] || config.safe;

  return (
    <div className="bg-slate-800 rounded-2xl p-5 text-center shadow-lg">

      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      <div
        className={`w-20 h-20 rounded-full mx-auto transition-all duration-300
        ${current.color}
        ${current.shadow}
        ${current.animation}`}
      />

      <p className="mt-5 text-lg font-bold tracking-wide">
        {current.status}
      </p>

    </div>
  );
}

export default AlertCard;