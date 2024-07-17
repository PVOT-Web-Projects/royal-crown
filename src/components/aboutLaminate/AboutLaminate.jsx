import Image from "next/image";
import { useEffect, useState } from "react";
import "./aboutLaminate.scss";
import crown from "../../images/crown11.png";

const AboutLaminate = ({ heading, text, leftText, rightText, image ,  scrollTo,
  goToSectionRef, showArrow}) => {
  return (
    <div className="about_laminate">
      <div className="laminate-wrapper">
        <div className="laminate-left">
          <div className="left_aboutus">ABOUT US</div>
          <div>
            <Image src={image} className="left_image" />
          </div>
        </div>
        <div className="laminate-right">
          <div className="heading_text">
            <div className="heading">{heading}</div>
            <div className="text">{text}</div>
            <div className="text">{text}</div>
          </div>
          <div className="bottom_text">
            <Image src={crown} alt="crown" />
            <div className="right_text">{rightText}</div>
          </div>
        </div>
      </div>
      {showArrow && (
      <div className="container_mouse">
            <span className="mouse-btn" onClick={() => scrollTo(goToSectionRef)}>
              <span className="mouse-scroll"></span>
            </span>
            <span>Scroll Down</span>
      </div>
      )}
    </div>
  );
};

export default AboutLaminate;
