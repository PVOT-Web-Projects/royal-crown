"use client";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import Aboutus_vision from "@/components/Aboutus_vision/page";
import "./Home.scss";
import AboutLaminate from "@/components/aboutLaminate/AboutLaminate";
import aboutLaminateImage from "@/images/557x535.jpg";
import MyForm from "@/components/forms/form1/Form";
import AboutUsEstablishment from "@/components/aboutUs_Establishment/aboutUs_Establish";
import AboutUs_Texture from "@/components/aboutUs_Texture/aboutUs_Texture";
import Establish from "@/components/establish/establish";
import { useEffect, useRef } from "react";
const AboutUs = () => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="abous_us">
      <div ref={section1}>
        <AboutLaminate
          heading={"Royal Crown Laminates"}
          text={
            "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor . Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor . "
          }
          leftText={"SCROLL DOWN"}
          rightText={
            "Since 2005, a high density laminates manufacturing company"
          }
          image={aboutLaminateImage}
          goToSectionRef={section2}
          scrollTo={scrollTo}
          showArrow={true}
        />
      </div>
      {/* <AboutUsEstablishment/> */}
        {/* <div ref={section2}>
          <Establish goToSectionRef={section3} scrollTo={scrollTo} showArrow={false}/>
        </div> */}
      <Aboutus_vision />
      <div ref={section3}>
        <AboutUs_Texture />
      </div>

      <div className="Form_Page">
        {/* <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <MyForm /> */}
      </div>
    </div>
  );
};
export default AboutUs;
