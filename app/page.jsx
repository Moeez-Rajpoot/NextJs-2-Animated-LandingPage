"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AcmeLogo } from "../components/logo";
import playbutton from "../public/assets/svg/video-icon.svg";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Navbar from "@/components/navbar";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const backgroundRef = useRef(null);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [activeSection, setActiveSection] = useState(0);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="overflow-hidden h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <Fade direction="up" delay={1900} triggerOnce>
      <Navbar />
      </Fade>
      <div
        ref={sectionRefs[0]}
        className="relative h-screen w-full bg-center bg-cover flex justify-center items-center overflow-hidden snap-start"
      >
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
          <div
            id="left"
            className="flex flex-col w-full items-center justify-center -mt-22 mr-5 gap-16"
          >
            <Fade delay={2000} fraction={0} triggerOnce>
              <div className="ml-6 mr-5 w-64">
                <AcmeLogo color="#ffffff" />
              </div>
            </Fade>

            <Fade delay={2200} triggerOnce>
              <div
                id="playbutton"
                className="hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in"
              >
                <Image
                  alt="Play button"
                  src={playbutton}
                  width={60}
                  height={60}
                />
              </div>
            </Fade>

            <div id="section1content">
              <Fade delay={2300} triggerOnce>
                <div id="para">
                  <h3 className="text-xl text-center text-[#d3d8dc]">
                    Start now and get{" "}
                    <span className="font-bold">free bonus</span> on account
                  </h3>
                </div>
              </Fade>

              <div
                id="fields"
                className="flex justify-center mt-10 items-center gap-3"
              >
                <Fade delay={2400} triggerOnce>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-56 h-14 rounded-md p-5 bg-white text-black"
                  />
                </Fade>
                <Fade delay={2500} triggerOnce>
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-56 h-14 rounded-md p-5 bg-white text-black"
                  />
                </Fade>
                <Fade delay={2600} triggerOnce>
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-56 h-14 rounded-md p-5 bg-white text-black"
                  />
                </Fade>

                <Fade delay={2700} triggerOnce>
                  <button className="bg-[#3098eb] h-14 flex justify-center items-center rounded-md p-5 hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in hover:shadow-md">
                    Get Started
                  </button>
                </Fade>
              </div>
            </div>
          </div>

          <div id="right" className="fixed right-16 text-white">
          <Fade delay={2000} triggerOnce>
            <ul className="gap-1 flex flex-col">
              {[...Array(6)].map((_, index) => (
                <li
                  key={index}
                  className={`w-1 rounded-sm transition-all duration-300 ${
                    activeSection === index
                      ? "h-10 bg-gray-50"
                      : "h-5 bg-gray-300"
                  }`}
                ></li>
              ))}
            </ul>
            </Fade>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[1]} className="snap-start h-screen">
        <Section2 />
      </div>
      <div ref={sectionRefs[2]} className="snap-start h-screen">
        <Section3 />
      </div>
      <div ref={sectionRefs[3]} className="snap-start h-screen">
        <Section4 />
      </div>
      <div ref={sectionRefs[4]} className="snap-start h-screen">
        <Section5 />
      </div>
      <div ref={sectionRefs[5]} className="snap-start h-screen">
        <Section6 />
      </div>
    </div>
  );
};

export default Home;
