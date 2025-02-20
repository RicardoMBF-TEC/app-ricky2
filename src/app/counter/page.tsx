'use client'
import Navbar from "@/app/components/NavBar";
import Button from "@/app/components/NavButton";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>
      <form onSubmit={handleSubmit}> {/* Added onSubmit here */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          Incrementar número
        </button>
      </form>
    </main>
    </div>
  );
}

