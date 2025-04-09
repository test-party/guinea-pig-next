'use client'
import { useState } from "react";

export default function ColorTogglePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <button
        onClick={() => setClicked(true)}
        className={`px-6 py-3 text-white font-bold rounded-2xl shadow-xl transition-colors duration-300 ${
          clicked ? 'bg-green-500' : 'bg-blue-500'
        }`}
      >
        Click here
      </button>

      {clicked && (
        <div className="mt-6 w-64 h-32 bg-pink-400 rounded-xl shadow-md flex items-center justify-center">
          <p className="text-white font-semibold"></p>
        </div>
      )}
    </div>
  );
} 
