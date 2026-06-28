function Gauge({ value, max, unit, color }) {
  const circumference = 251;

  // Prevent the gauge from exceeding 100%
  const percentage = Math.min(value / max, 1);

  // Calculate the filled portion of the gauge
  const offset = circumference - percentage * circumference;

  return (
    <div className="w-56 mx-auto relative">

      <svg viewBox="0 0 200 120">

        {/* Background Arc */}
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke="#334155"
          strokeWidth="16"
        />

        {/* Filled Arc */}
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />

      </svg>

      <div className="absolute bottom-4 w-full text-center text-3xl font-bold">
        {value}
        {unit}
      </div>

    </div>
  );
}

export default Gauge;