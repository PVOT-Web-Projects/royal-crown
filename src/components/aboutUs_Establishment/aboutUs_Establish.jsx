"use client";
import "./aboutUs_Establishment.scss";
import Image from "next/image";
import timeLine from "../../images/laminate - about-us 2.png";
import icon from "../../images/crown11.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUsEstablishment = () => {
  return (
    <div className="about_Establishment">
      <div className="Establishment_Wrapper" >
        <div className="left">
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
            >
              1990
            </p>
            <p
              className="year other-years"
            >
              1993
            </p>
            <p
              className="year other-years"
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
