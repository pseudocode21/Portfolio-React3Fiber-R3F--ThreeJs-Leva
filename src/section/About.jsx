import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("singhgaurav.y@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png "
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Gaurav</p>
              <p className="grid-subtext">
                Dedicated to problem-solving and innovative projects,
                specializing in full-stack web development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] mx-auto h-fit object-contain rotate-img "
            />
            <div>
              <p className="grid-headtext ">Tech Stack</p>
              <p className="grid-subtext ">
                {" "}
                I specialize in <strong>C++</strong>, <strong>Java</strong>,{" "}
                <strong>JavaScript</strong>, <strong>React</strong>, and{" "}
                <strong>Spring Boot</strong>, with a strong foundation in{" "}
                <strong>Data Structures and Algorithms</strong> (DSA). I built
                this website using <strong>React Three Fiber</strong> (Three.js)
                to create interactive 3D web experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpaacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">Sharing My Work with the World</p>
              <p className="grid-subtext">
                I'm based in Uttar Pradesh, India with remote work available.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Driven by Code</p>
              <p className="grid-subtext">
                Coding excites me because it allows me to think logically and
                find solutions to interesting problems.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[160px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container " onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl font-medium text-gray_gradient ">
                  {" "}
                  singhgaurav.y@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
