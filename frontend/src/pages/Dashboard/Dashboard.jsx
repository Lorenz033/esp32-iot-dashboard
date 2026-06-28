import Title from "../../components/dashboard/Title";
import SensorCard from "../../components/dashboard/SensorCard";

function Dashboard() {

  // Mock sensor values
  const temperature = 25;
  const humidity = 60;
  const gas = 250;
  const flame = 10;
  const light = 300;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-5">

      <Title />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1800px] mx-auto mb-8">

        <SensorCard
          title="🌡 Temperature"
          value={temperature}
          max={50}
          unit="°C"
          color="#22c55e"
          label="Temperature Sensor"
        />

        <SensorCard
          title="💧 Humidity"
          value={humidity}
          max={100}
          unit="%"
          color="#3b82f6"
          label="Humidity Sensor"
        />

        <SensorCard
          title="🛢 Gas Level"
          value={gas}
          max={1000}
          unit=" PPM"
          color="#ef4444"
          label="MQ Gas Sensor"
        />

        <SensorCard
          title="🔥 Flame"
          value={flame}
          max={100}
          unit="%"
          color="#f97316"
          label="Flame Sensor"
        />

        <SensorCard
          title="💡 Placeholder"
          value={0}
          max={100}
          unit=""
          color="#64748b"
          label="Reserved Sensor"
        />

        <SensorCard
          title="💡 Light"
          value={light}
          max={1000}
          unit=" Lux"
          color="#FDF8D8"
          label="BH1750"
        />

      </div>

    </div>
  );
}

export default Dashboard;