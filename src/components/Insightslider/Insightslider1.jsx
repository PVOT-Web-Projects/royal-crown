"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./abc.scss";
import Image from "next/image";
import demoimage from "../../images/insightslider.png";
function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const counterRef = useRef(null); // Ref for the counter element
  const [currentIndex, setCurrentIndex] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;
    const pin = gsap.fromTo(
      sectionElement,
      {
        x: 0,
      },
      {
        x: "-100%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "2000 top",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * 6); // Assuming 7 images (index 0 to 6)
            setCurrentIndex(index);
          },
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  useEffect(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );
    }
  }, [currentIndex]);

  return (
    <div style={{position:"relative",marginTop:"80px"}}>
      <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div className="InsightsTextMain">
          <p className="InsightsText">LATEST INSIGHTS</p>
          <div className="InsightsButton">
            <button className="innerrbutton">Explore All Blogs</button>
          </div>
        </div>
        <div className="wrap">
          <div className="fixed-counter">
            <div>
              <div className="counter">
                {String(currentIndex + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div>
                <Image src={demoimage} alt="none" className="image1" />
                <div className="textSlider">
                  <p className="textSliderText">
                    Urban Design Trends with Royal Crown Luxury Laminates
                  </p>
                  <p className="textSliderText2">07 March 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ScrollSection;
