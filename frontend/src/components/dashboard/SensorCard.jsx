import Gauge from "./Gauge";

function SensorCard({
  title,
  value,
  max,
  unit,
  color,
  label,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 text-center shadow-lg">

      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      <Gauge
        value={value}
        max={max}
        unit={unit}
        color={color}
      />

      <p className="text-slate-400 mt-4">
        {label}
      </p>

    </div>
  );
}

export default SensorCard;