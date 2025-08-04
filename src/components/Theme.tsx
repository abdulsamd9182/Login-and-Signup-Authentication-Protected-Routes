// src/components/DarkModeToggle.jsx
import { useContext } from "react";
import { DarkModeContext } from "@/Hooks/DarkModecontext";

function Theme() {
  const { mode, toggleMode } = useContext(DarkModeContext);

  return (
    <div
      className={`h-screen w-full flex items-center justify-center transition-all duration-300 ${
        mode === "dark" ? "bg-[#646076] text-white" : "bg-[#dbd3fc] text-black"
      }`}
    >
      <button
        onClick={toggleMode}
        className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all"
      >
        Toggle to {mode === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Theme;
