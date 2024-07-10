"use client";
import "./aboutUs_Establishment.scss";
import Image from "next/image";
import timeLine from "../../images/aboutUs_timeline_image.png";
import icon from "../../images/crown11.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUsEstablishment = () => {
  const yearsRef = useRef([]);
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const updateFontSize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
      const largeSize = isLargeScreen ? "4rem" : "2rem";
      const smallSize = isLargeScreen ? "2rem" : "1rem";

      yearsRef.current.forEach((year, index) => {
        ScrollTrigger.create({
          trigger: year,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(year, { color: "black", fontSize: largeSize, scale: 1.5, duration: 0.5 });
            yearsRef.current.forEach((otherYear, otherIndex) => {
              if (otherIndex !== index) {
                gsap.to(otherYear, { color: "grey", fontSize: smallSize, scale: 1, duration: 0.5 });
              }
            });
          },
          onLeaveBack: () => gsap.to(year, { color: "grey", fontSize: smallSize, scale: 1, duration: 0.5 }),
          onEnterBack: () => gsap.to(year, { color: "black", fontSize: largeSize, scale: 1.5, duration: 0.5 }),
          onLeave: () => gsap.to(year, { color: "grey", fontSize: smallSize, scale: 1, duration: 0.5 }),
        });
      });
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about_Establishment">
      <div className="Establishment_Wrapper" >
        <div className="left" ref={sectionRef}>
          <div className="icon">
            <Image src={icon} alt="Crown Icon" />
          </div>
          <div className="icon_heading">
            <div>THE</div>
            <div>ESTABLISHMENT</div>
          </div>
          <div className="box">
            <p
              className="year"
              ref={(el) => (yearsRef.current[0] = el)}
            >
              1990
            </p>
            <p
              className="year other-years"
              ref={(el) => (yearsRef.current[1] = el)}
            >
              1993
            </p>
            <p
              className="year other-years"
              ref={(el) => (yearsRef.current[2] = el)}
            >
              1993
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <Image src={timeLine} alt="Timeline" className="TimeLine_Image" />
          </div>
          <div className="Text-block">
            From our infant days we have carved ourselves as renowned
            manufacturers and exporters of premium grade decorative laminates.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsEstablishment;
