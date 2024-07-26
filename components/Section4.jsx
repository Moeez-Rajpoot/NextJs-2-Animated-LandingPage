import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Img1 from "../public/assets/img/image-89-1.jpg";
import Img2 from "../public/assets/img/image-89-2.jpg";
import { Fade } from "react-awesome-reveal";

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
            backgroundImage: "url('/assets/img/background/img-89.jpg')",
          }}
        ></div>

        {/* Your Section2 Content */}
        <div className="z-10 flex justify-center items-center w-full h-screen pt-20">
          {/* Content */}
          <div className="w-[56%] h-full pl-52 pr-20">
            <Fade delay={1000}>
              <p className={`text-xl text-slate-300 ${inter.className}`}>
                Case Study
              </p>
            </Fade>
            <Fade delay={1200}>
              <h1
                className={`text-5xl tracking-tighter font-light leading-snug mt-10 ${inter.className}`}
              >
                The Secret of Success
              </h1>
            </Fade>
            <Fade delay={1400}>
              <p className="text-gray-200 text-xl font-extralight pr mt-5 leading-9">
                No matter how many times your amazing, absolutely brilliant work
                is rejected by the client, for whatever dopey, arbitrary reason,
                there is often another amazing, absolutely brilliant solution
                possible.
              </p>
            </Fade>

            <div className="flex mt-16">
              <div>
                <Fade direction="left" delay={1600}>
                  <h1 className="text-xl font-semibold">Camera</h1>
                </Fade>
                <Fade direction="left" delay={1650}>
                  <p className="text-slate-300 mt-3">
                    Scan entire conversations in a chat-like view.
                  </p>
                </Fade>
              </div>
              <div>
                <Fade direction="left" delay={1700}>
                  <h1 className="text-xl font-semibold">Messages</h1>
                </Fade>
                <Fade direction="left" delay={1750}>
                  <p className="text-slate-300 mt-3">
                    Scan entire conversations in a chat-like view.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="flex mt-8">
              <div>
                <Fade direction="left" delay={1800}>
                  <h1 className="text-xl font-semibold">Music Center</h1>
                </Fade>
                <Fade direction="left" delay={1850}>
                  <p className="text-slate-300 mt-3">
                    Scan entire conversations in a chat-like view.
                  </p>
                </Fade>
              </div>
              <div>
                <Fade direction="left" delay={1900}>
                  <h1 className="text-xl font-semibold">Channals</h1>
                </Fade>
                <Fade direction="left" delay={1950}>
                  <p className="text-slate-300 mt-3">
                    Scan entire conversations in a chat-like view.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="w-[44%] h-full pl-5 " id="sectioncontent">
            <Fade direction="up" delay={2000}>
              <Image
                className="rounded-md"
                alt="IMAGE1"
                src={Img1}
                width={450}
                height={450}
              ></Image>
            </Fade>

            <Fade direction="up" delay={2050}>
              <Image
                className="rounded-md mt-7"
                alt="IMAGE1"
                src={Img2}
                width={450}
                height={450}
              ></Image>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
