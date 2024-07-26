import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Fade } from "react-awesome-reveal";

// Move the font loader call to the module scope
const inter = Inter({ subsets: ["latin"] });

const Section3 = () => {
  const backgroundRef = useRef(null);
  const [animationRan, setAnimationRan] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRan) {
            console.log("Section 2 intersecting");
            entry.target.classList.remove("animate-zoom-in-out");
            void entry.target.offsetWidth; // Trigger reflow
            entry.target.classList.add("animate-zoom-in-out");
            setAnimationRan(true); // Set the flag to true after the animation runs
          }
        });
      },
      { threshold: 1.0 } // Adjust the threshold as needed
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

  return (
    <div>
      <div className="relative h-screen w-full bg-center bg-cover flex justify-center items-center overflow-hidden snap-start">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-center bg-cover opacity-45 h-screen"
          style={{
            backgroundImage: "url('/assets/img/background/img-14.jpg')",
          }}
        ></div>

        {/* Your Section2 Content */}
        <div className="z-10 flex justify-center items-center w-full h-screen pt-36">
          {/* Content */}
          <div className="w-[56%] h-full pl-52">
            <Fade delay={1000}>
            <h1
              className={`text-4xl font-light leading-snug mt-14 ${inter.className}`}
            >
              Designers are meant to be loved,
              <br /> <span> not to be understood.</span>
            </h1>
            </Fade>

            <Fade delay={1200}>
            <p className="text-gray-200 text-2xl font-extralight pr-10 mt-5 leading-9">
              You must forget all your theories, all your ideas before the
              subject. What part of these is really your own will be expressed
              in your expression.
            </p>
            </Fade>

            <Fade delay={1400}>
            <button className="bg-[#3098eb] h-14 mt-10 flex justify-center items-center rounded-md p-5 hover:cursor-pointer hover:-translate-y-1 transition duration-300 ease-in hover:shadow-md">
              Get Started
            </button>
            </Fade>
          </div>
          <div className="w-[44%] h-full " id="sectioncontent"></div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
