import React, { useEffect, useState } from "react";
import Image from "next/image";
import AboutUs_vision from "../../images/aboutUs_vision_image.webp";
import vision_playButton from "@/images/svgLogos/vision_playButton.svg";
import "./aboutus_vision.scss";
import logo from "../../images/logo_white.png";
const page = ({duration = 60 }) => {
  const [width, setWidth] = useState(0);
  const increment = 100 / (duration * 10); // Increase the width 10 times per second

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setWidth((prevWidth) => {
        const newWidth = prevWidth + increment;
        if (newWidth >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newWidth;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [increment]);
  return (
    <>
      <div class="aboutUs_vision_outer">
        <div className="aboutUs_Wrapper">
          <div className="vision_heading">Vision</div>
          <div className="header_section">
            <div className="section_left">Video title</div>
            <div className="section_right">
              From our infant days we have carved ourselves as renowned
              manufacturers and exporters of premium grade decorative laminates.
            </div>
          </div>
          <div className="vision_video">
            <Image
              class="vision_image_outer"
              src={AboutUs_vision}
              alt="Picture of the author"
            />
            <Image
              class="vision_playButton"
              src={vision_playButton}
              alt="Picture of the author"
            />
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${width}%` }}></div>
          </div>
          <div className="aboutUs_vision_bottom">
            <div className="vision_text_bottom">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </div>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
