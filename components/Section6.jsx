"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import appstore from "../public/assets/img/appstore.jpg";
import playstore from "../public/assets/img/googleplay.jpg";
import { Fade } from "react-awesome-reveal";

const inter = Inter({ subsets: ["latin"] });

const Section6 = () => {
  const backgroundRef = useRef(null);
  const [animationRan, setAnimationRan] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRan) {
            console.log("Section 2 intersecting");
            entry.target.classList.remove("animate-zoom-in-out");
            void entry.target.offsetWidth;
            entry.target.classList.add("animate-zoom-in-out");
            setAnimationRan(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      if (backgroundRef.current) {
        observer.unobserve(backgroundRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="relative h-screen w-full bg-center bg-cover flex justify-center items-center overflow-hidden snap-start">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-center bg-cover opacity-45 h-screen"
          style={{
            backgroundImage: "url('/assets/img/background/img-95.jpg')",
          }}
        ></div>

        {/* Your Section2 Content */}
        <div className="z-10 flex flex-col  items-center w-full h-screen pt-36">
          {/* Content */}
          <div className="mt-10">
            <Fade direction="up" delay={1000}>
              <h2 className="text-6xl text-white font-extralight">
                Download Mobile App
              </h2>
            </Fade>

            <Fade direction="up" delay={1100}>
              <p className="text-center text-3xl mt-7 text-slate-200 font-extralight">
                Learning never exhausts the mind.
              </p>
            </Fade>
          </div>

          <Fade direction="up" delay={1200}>
            <div className="mt-7 flex gap-3">
              <input
                type="text"
                placeholder="Email Address"
                className="w-80 h-14 rounded-md p-5 bg-white text-black"
              />
              <button className="bg-[#3098eb] h-14 flex justify-center items-center rounded-md p-5 hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in hover:shadow-md">
                Get Started
              </button>
            </div>
          </Fade>

          <Fade direction="up" delay={1300}>
            <div className="flex gap-3 mt-5">
              <Image
                alt="App Store"
                src={appstore}
                width={180}
                height={50}
              ></Image>

              <Image
                alt="Google Play"
                src={playstore}
                width={180}
                height={50}
              ></Image>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Section6;
