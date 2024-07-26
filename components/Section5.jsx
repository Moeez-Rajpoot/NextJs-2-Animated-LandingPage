import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Fade } from "react-awesome-reveal";

// Move the font loader call to the module scope
const inter = Inter({ subsets: ["latin"] });

const Section5 = () => {
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
      <div className="relative h-fit w-full bg-center bg-cover flex justify-center items-center overflow-hidden snap-start">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-center bg-cover opacity-45 h-screen"
          style={{
            backgroundImage: "url('/assets/img/background/img-85.jpg')",
          }}
        ></div>

        {/* Your Section5 Content */}
        <div className="z-10 flex flex-col justify-center items-center w-full h-screen overflow-y-auto pt-36 hide-scrollbar">
          {/* Content */}
          <div className="w-[56%] h-full max-h-[80vh] mb-48 mt-7 flex items-center flex-col pb-36">
            {" "}
            {/* Added padding-bottom */}
            {/* Pricing Heading */}
            <Fade direction="up" delay={1000}>
              <h2 className={`text-4xl mt-5 font-bold mb-8 ${inter.className}`}>
                Pricing
              </h2>
            </Fade>
            {/* Price Cards */}
            <div className="flex justify-center items-center w-full space-x-8">
              {/* Card 1 */}
              <Fade delay={1200}>
                <div className="bg-white h-[80vh] p-6 rounded-lg flex flex-col items-center shadow-lg w-[100%]">
                  <h1 className="text-black text-xl">Moon</h1>

                  <div className="mr-5 mt-5 flex h-fit">
                    <p className="h-20 p-1 font-light text-slate-400 text-3xl">
                      $
                    </p>
                    <h2 className="h-20 p-1 font-thin text-black text-9xl">
                      0
                    </h2>
                  </div>

                  <p className="text-slate-400 mt-32 font-semibold tracking-tighter ml-3 text-sm">
                    NO CREDIT CARD NEEDED
                  </p>
                  <div className="mt-10">
                    <p className="text-sm text-black font-semibold text-center">
                      25 Free Images
                    </p>
                    <p className="text-slate-500 text-sm text-center">
                      Custom Domain
                    </p>
                    <p className="text-slate-500 text-sm text-center">
                      24/7 Customer Support
                    </p>
                  </div>

                  <button className="bg-green-600 shadow-md text-center px-28 mt-16 rounded-md mb-10  py-3 text-white">
                    Try Free
                  </button>
                </div>
              </Fade>

              {/* Card 2 */}
              <Fade delay={1400}>
                <div className="bg-white h-[80vh] p-6 rounded-lg flex flex-col items-center shadow-lg w-[100%]">
                  <h1 className="text-black text-xl">Planet</h1>

                  <div className="mr-5 mt-5 flex h-fit">
                    <p className="h-20 p-1 font-light text-slate-400 text-3xl">
                      $
                    </p>
                    <h2 className="h-20 p-1 font-thin text-black text-9xl">
                      6
                    </h2>
                  </div>

                  <p className="text-slate-400 mt-32 font-semibold tracking-tighter ml-3 text-sm">
                    BILLED PER MONTH
                  </p>
                  <div className="mt-10">
                    <p className="text-sm text-black font-semibold text-center">
                      60 Free Images
                    </p>
                    <p className="text-black font-semibold text-sm text-center">
                      Mobile-Optimized
                    </p>
                    <p className="text-black font-semibold text-sm text-center">
                      No Transaction Fees
                    </p>
                    <p className="text-slate-500 text-sm text-center">
                      Custom Domain
                    </p>
                    <p className="text-slate-500 text-sm text-center">
                      24/7 Customer Support
                    </p>
                  </div>

                  <button className="bg-blue-500 shadow-md text-center px-28 mt-6 rounded-md mb-10  py-3 text-white">
                    Purchase
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
