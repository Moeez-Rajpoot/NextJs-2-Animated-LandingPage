import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Fade } from "react-awesome-reveal";

// Move the font loader call to the module scope
const inter = Inter({ subsets: ["latin"] });

const Section2 = () => {
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
    <div>
      <div className="relative h-screen w-full bg-center bg-cover flex justify-center items-center overflow-hidden snap-start">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-center bg-cover opacity-45 h-screen"
          style={{
            backgroundImage: "url('/assets/img/background/img-15.jpg')",
          }}
        ></div>

        {/* Your Section2 Content */}
        <div className="z-10 flex justify-center items-center w-full h-screen pt-36">
          {/* Content */}
          <div className="w-[44%] h-full"></div>
          <div className="w-[56%] h-full " id="sectioncontent">
            <Fade delay={1400}>
            <h1 className={`text-4xl font-extralight mt-14 ${inter.className}`}>
              Designing a product is designing a<br />{" "}
              <span>relationship</span>
            </h1>
            </Fade>
            <Fade delay={1600}>
            <p className="text-gray-200 text-2xl font-light pr-36 mt-5 leading-9">
              Man was designed in a way in which he must eat in order to give
              him a solid reason to go to work everyday. This helps to keep him
              out of trouble. God is wise.
            </p>
            </Fade>

            <Fade delay={1800}>
            <button className="bg-[#3098eb] h-14 mt-10 flex justify-center items-center rounded-md p-5 hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in hover:shadow-md">
                  Get Started
                </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
