"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './threeDSlider.scss'; // Import your SCSS file here

gsap.registerPlugin(ScrollTrigger);

const ThreeDSlider2 = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery_box",
        start: "top center-=200px",
        end: "bottom+=3000px center-=200px", // Increase the end point to extend the scroll distance
        scrub: true,
        pin: ".gallery_box", // Ensure pinning the correct element
        pinSpacing: false,  // Disable automatic pin spacing
        markers: true,
      }
    });

    tl.to('.gallery_box_outer', {
      duration: 10,
      rotateY: 360,
      ease: "none",
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="work2">
      <div className="gallery_box">
        <div className="gallery_box_outer">
          <div className="gallery_box_in" style={{ background: 'black' }}></div>
          <div className="gallery_box_in" style={{ background: 'yellow' }}></div>
          <div className="gallery_box_in" style={{ background: 'red' }}></div>
          <div className="gallery_box_in" style={{ background: 'pink' }}></div>
          <div className="gallery_box_in" style={{ background: 'blue' }}></div>
          <div className="gallery_box_in" style={{ background: 'green' }}></div>
          <div className="gallery_box_in" style={{ background: 'purple' }}></div>
          <div className="gallery_box_in" style={{ background: 'lightgrey' }}></div>
          <div className="gallery_box_in" style={{ background: 'orange' }}></div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDSlider2;
