import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Img1 from "../public/assets/img/image-89-1.jpg";  
import Img2 from "../public/assets/img/image-89-2.jpg";  

// Move the font loader call to the module scope
const inter = Inter({ subsets: ["latin"] });

const Section4 = () => {
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
      <div className="relative h-screen w-full bg-center bg-cover flex justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-center bg-cover opacity-45 h-screen"
          style={{
            backgroundImage: "url('/assets/img/background/img-89.jpg')",
          }}
        ></div>

        {/* Your Section2 Content */}
        <div className="z-10 flex justify-center items-center w-full h-screen pt-20">
          {/* Content */}
          <div className="w-[56%] h-full pl-52 pr-20">
            <p className={`text-xl text-slate-300 ${inter.className}`}>
              Case Study
            </p>
            <h1
              className={`text-5xl tracking-tighter font-light leading-snug mt-10 ${inter.className}`}
            >
              The Secret of Success
            </h1>
            <p className="text-gray-200 text-xl font-extralight pr mt-5 leading-9">
              No matter how many times your amazing, absolutely brilliant work
              is rejected by the client, for whatever dopey, arbitrary reason,
              there is often another amazing, absolutely brilliant solution
              possible.
            </p>

            <div className="flex mt-16">
              <div>
                <h1 className="text-xl font-semibold">Camera</h1>
                <p className="text-slate-300 mt-3">
                Scan entire conversations in a chat-like view.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Messages</h1>
                <p className="text-slate-300 mt-3">
                Scan entire conversations in a chat-like view.
                </p>
              </div>
            </div>

            
            <div className="flex mt-8">
              <div>
                <h1 className="text-xl font-semibold">Music Center</h1>
                <p className="text-slate-300 mt-3">
                Scan entire conversations in a chat-like view.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Channals</h1>
                <p className="text-slate-300 mt-3">
                Scan entire conversations in a chat-like view.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[44%] h-full pl-5 " id="sectioncontent">


            <Image

            className="rounded-md"
            alt="IMAGE1"
            src={Img1}
            width={450}
            height={450}
            >
            </Image>

            <Image
            className="rounded-md mt-7"
            alt="IMAGE1"
            src={Img2}
            width={450}
            height={450}
            >
            </Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
