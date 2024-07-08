import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import Aboutus_vision from "@/components/Aboutus_vision/page";
import "./Home.scss";
import AboutLaminate from "@/components/aboutLaminate/AboutLaminate";
import aboutLaminateImage from "@/images/laminate - about-us 1.png";
import AboutUsDivider from "./AboutUsDivider";
const AboutUs = () => {
  return (
    <div className="abous_us">
      <AboutLaminate
        heading={"Royal Crown Laminates"}
        text={
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor . Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor . "
        }
        leftText={"SCROLL DOWN"}
        rightText={"Since 2005, a high density laminates manufacturing company"}
        image={aboutLaminateImage}
      />
      <AboutUsDivider/>
      <Aboutus_vision />

      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
