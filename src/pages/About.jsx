import React from "react";
import Navbar from "../components/Navbar";
import Me from "../assets/Me.png";
import Wrapper from "../components/Wrapper";

export default function About() {
  return (
    <Wrapper>
      <Navbar className="bg-amber-400 bg-opacity-70" />
      <div className="container mx-auto pt-32">
        <div className="flex flex-col md:flex-row md:gap-x-11 justify-center items-center mt-20 w-3/4 m-auto">
          <div className="">
            <h2 className="text-slate-50 text-4xl font-semibold">ABOUT ME</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, veritatis?
          </div>
          <div className="h-[300px] shrink-0 w-[300px] rounded-full overflow-hidden shadow-xl">
            <img className="h-full w-full" src={Me} alt="" />  
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
