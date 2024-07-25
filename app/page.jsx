"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AcmeLogo } from "../components/logo";
import playbutton from "../public/assets/svg/video-icon.svg";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";

const Home = () => {
  const backgroundRef = useRef(null);
  const [animationRan, setAnimationRan] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRan) {
            console.log("intersecting");
            entry.target.classList.remove("animate-zoom-in-out");
            void entry.target.offsetWidth; 
            entry.target.classList.add("animate-zoom-in-out");
            setAnimationRan(true); 
          }
        });
      },
      { threshold: 1.0 }
    );

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      if (backgroundRef.current) {
        observer.unobserve(backgroundRef.current);
      }
    };
  }, [animationRan]);

  const resetAnimation = () => {
    setAnimationRan(false);
  };

  return (
    <div className="overflow-hidden">
      <div className="relative h-screen w-full bg-center bg-cover flex justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-center bg-cover opacity-50 h-screen"
          style={{
            backgroundImage: "url('/assets/img/background/img-09.jpg')",
          }}
        ></div>
        
        {/* Content */}
        <div className="z-10 flex justify-center items-center">
          <div id="left" className="flex flex-col w-full items-center justify-center -mt-22 mr-5 gap-16">
            <div className="ml-6 mr-5 w-64">
              <AcmeLogo color="#ffffff" />
            </div>

            <div
              id="playbutton"
              className="hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in"
            >
              <Image alt="Play button" src={playbutton} width={60} height={60} />
            </div>

            <div id="section1content">
              <div id="para">
                <h3 className="text-xl text-center text-[#d3d8dc]">
                  Start now and get <span className="font-bold">free bonus</span> on account
                </h3>
              </div>

              <div id="fields" className="flex justify-center mt-10 items-center gap-3">
                <input type="text" placeholder="Email" className="w-56 h-14 rounded-md p-5 bg-white text-black" />
                <input type="text" placeholder="Password" className="w-56 h-14 rounded-md p-5 bg-white text-black" />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-56 h-14 rounded-md p-5 bg-white text-black"
                />

                <button className="bg-[#3098eb] h-14 flex justify-center items-center rounded-md p-5 hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in hover:shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div id="right" className="fixed right-16 text-white">
            <ul className="gap-1 flex flex-col">
              {[...Array(6)].map((_, index) => (
                <li key={index} className="h-5 w-1 bg-white rounded-sm"></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Section2/>

      <Section3/>

      <Section4/>

      <Section5/>
    </div>
  );
};

export default Home;