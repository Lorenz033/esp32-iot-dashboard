import { useState } from "react";
import Title from "../../components/dashboard/Title";
import SensorCard from "../../components/dashboard/SensorCard";
import LedCard from "../../components/dashboard/LedCard";

function Dashboard() {

  // Mock sensor values
  const temperature = 25;
  const humidity = 60;
  const gas = 250;
  const flame = 10;
  const light = 300;
  const water = 50;

  // Mock LED states
  const [leds, setLeds] = useState([
    false,
    false,
    false,
    false,
  ]);

  function toggleLed(index) {
    const updated = [...leds];
    updated[index] = !updated[index];
    setLeds(updated);
  }

  function toggleAllLeds() {

    const allOn = leds.every((led) => led);

    if (allOn) {
      setLeds([false, false, false, false]);
    } else {
      setLeds([true, true, true, true]);
    }

  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-5">

      <Title />

      {/* Sensor Cards */}
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
          title="🌊 Water"
          value={water}
          max={100}
          unit="%"
          color="#06b6d4"
          label="Water Level Sensor"
        />

        <SensorCard
          title="💡 Light"
          value={light}
          max={1000}
          unit=" Lux"
          color="#eab308"
          label="BH1750 Light Sensor"
        />

      </div>

      {/* Master LED Control */}
      <div className="flex justify-center mb-8">

        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg w-full max-w-md text-center">

          <h2 className="text-2xl font-bold mb-4">
            Master LED Control
          </h2>

          <button
            onClick={toggleAllLeds}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-xl py-3 text-lg font-semibold"
          >
            {leds.every((led) => led)
              ? "Turn All OFF"
              : "Turn All ON"}
          </button>

        </div>

      </div>

      {/* LED Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1800px] mx-auto">

        <LedCard
          title="LED 1"
          isOn={leds[0]}
          onToggle={() => toggleLed(0)}
        />

        <LedCard
          title="LED 2"
          isOn={leds[1]}
          onToggle={() => toggleLed(1)}
        />

        <LedCard
          title="LED 3"
          isOn={leds[2]}
          onToggle={() => toggleLed(2)}
        />

        <LedCard
          title="LED 4"
          isOn={leds[3]}
          onToggle={() => toggleLed(3)}
        />

      </div>

    </div>
  );
}

export default Dashboard;