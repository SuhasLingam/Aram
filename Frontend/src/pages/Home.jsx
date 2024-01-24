import React from "react";
import Header from "../components/Header";
import TestCard from "../components/TestCard";

function Home() {
  return (
    <>
      <div className="relative">
        {/* Carousel */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1617575523032-fde690b9ad67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover w-full h-[400px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">Aram Project</h1>
            <p className="text-2xl">Streak for Humanity</p>
            <button className="px-8 py-2 bg-blue-500 rounded text-white">Contribute</button>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-8 bg-white">
          <h2 className="text-3xl font-bold mb-4">Why Aram Project?</h2>
          <p>Aram is a decentralized social networking platform focused on fostering acts of kindness and collaboration. Users come together to share and address adversities, earning virtual coins for their contributions.</p>
        </div>

        {/* Footer */}
        <footer className="p-8 bg-black text-white text-center">
          <p>© {new Date().getFullYear()} Aram Project. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;