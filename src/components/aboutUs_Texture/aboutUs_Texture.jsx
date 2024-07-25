import Image from "next/image";
import "./aboutUs_Texture.scss";
import Crown from "../../images/crown11.png";
import image from "../../images/image 26.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import YellowButton from "../buttons/yellowButton/YellowButton";

const AboutUs_Texture = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const rightRef = useRef(null);
  const rightBottomRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;

    if (sectionElement && triggerElement) {
      const horizontalSections = gsap.utils.toArray(".image_box");

      const scrollAnimation = gsap.fromTo(
        horizontalSections,
        { xPercent: 0 },
        {
          xPercent: -100 * (horizontalSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=1000",
            snap: 1 / (horizontalSections.length - 1),
          },
        }
      );

      return () => {
        scrollAnimation.kill();
      };
    }
  }, []);

  return (
    <>
      <div className="aboutUs_Texture_Container" ref={triggerRef}>
        <div className="aboutUs_Texture_wrapper">
          <motion.div
            className="texture_left"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="heading_text">
              <p>Why</p>
              <p className="brown">Royal</p>
              <p className="brown">Crown?</p>
            </div>
            <div className="texture_section">
              <div>
                <div className="number">1000+</div>
                <div className="text">Textures</div>
              </div>
              <div>
                <div className="number">2000+</div>
                <div className="text">SKUs</div>
              </div>
            </div>
          </motion.div>
          <div className="texture_right">
            <div className="imageBox" ref={sectionRef}>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
            </div>
            <div className="size_section">
              <motion.div
                className="size_section_inner"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="size_left">
                  <p>Sizes</p>
                </div>
                <div className="size_right">
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="texture_footer">
              <motion.div className="texture_inner"
               initial={{ x: 100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 2 }}
               viewport={{ once: true }}
              >
                <div className="logo_image">
                  <Image src={Crown} alt="Crown Logo" />
                </div>
                <div className="footer_text">
                  <p className="footer_text_inner">High Rating Reviews</p>
                </div>
                <div className="btn">
                  <YellowButton btn_text={"More"} url={"/"} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs_Texture;
