import React from "react";
import Header from "../components/Header";
import TestCard from "../components/TestCard";

function Home() {
  return (
    <>
      <div className="bg-black">
        {/* Carasouels */}
        <div className="bg-[#000000]">
          <img
            src="https://images.unsplash.com/photo-1617575523032-fde690b9ad67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-contain w-screen h-[400px]"
          />
        </div>
        <hr className="bg-white h-[1px] border-0 mt-10  mr-[84px] ml-[84px]" />
        {/* Testimonials */}
        <div className="bg-black ">
          <div className="text-[#99ff53] text-center text-3xl m-4">
            Testimonials
          </div>
          <div className="mb-4">
            <TestCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
