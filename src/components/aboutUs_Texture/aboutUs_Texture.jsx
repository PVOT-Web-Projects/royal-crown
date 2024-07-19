import Image from "next/image";
import "./aboutUs_Texture.scss";
import Crown from "../../images/crown11.png";
import image from "../../images/image 26.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import YellowButton from "../buttons/yellowButton/YellowButton";

const AboutUs_Texture = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const rightBottomRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;
    const leftSectionElement = leftRef.current;
    const rightSectionElement = rightRef.current;
    const rightBottomElement = rightBottomRef.current;

    if (sectionElement && triggerElement) {
      const horizontalSections = gsap.utils.toArray(".box");

      const scrollAnimation = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: () =>
            "+=" + triggerElement.offsetWidth * (horizontalSections.length - 1),
          pin: true,
          scrub: true,
          // snap: 1 / (horizontalSections.length - 1),
        },
      });

      const leftSectionAnimation = gsap.fromTo(
        leftSectionElement,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: leftSectionElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      const rightSectionAnimation = gsap.fromTo(
        rightSectionElement,
        { x: 1200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: rightSectionElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      const rightBottomAnimation = gsap.fromTo(
        rightBottomElement,
        { x: 1200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: rightBottomElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      return () => {
        scrollAnimation.kill();
        leftSectionAnimation.kill();
        rightSectionAnimation.kill();
        rightBottomAnimation.kill();
      };
    }
  }, []);

  return (
    <>
      <div className="aboutUs_Texture_Container" ref={triggerRef}>
        <div className="aboutUs_Texture_wrapper">
          <div className="texture_left" ref={leftRef}>
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
          </div>
          <div className="texture_right">
            <div className="imageBox" ref={sectionRef}>
              <div className="box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
            </div>
            <div className="size_section" ref={rightRef}>
              <div className="size_section_inner">
                <div className="size_left">
                  <p>Sizes</p>
                </div>
                <div className="size_right">
                  <div><p>1220 x 2440mm</p></div>
                  <div><p>1220 x 2440mm</p></div>
                  <div><p>1220 x 2440mm</p></div>
                  <div><p>1220 x 2440mm</p></div>
                  <div><p>1220 x 2440mm</p></div>
                  <div><p>1220 x 2440mm</p></div>
                </div>
              </div>
            </div>
            <div className="texture_footer" ref={rightBottomRef}>
              <div className="texture_inner">
                <div className="logo_image">
                  <Image src={Crown}/>
                </div>
                <div className="footer_text">
                  <p className="footer_text_inner">High Rating Reviews</p>
                </div>
                <div className="btn">
                  <YellowButton btn_text={"More"} url={"/"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs_Texture;
