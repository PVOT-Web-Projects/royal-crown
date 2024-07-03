import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import AboutUs_timeline from "@/components/aboutUs_timeline/page"
import Aboutus_vision from "@/components/Aboutus_vision/page"
import Aboutus_slide from "@/components/aboutUs_slide/page"
import "./Home.scss";
import AboutLaminate from "@/components/aboutLaminate/AboutLaminate";
import aboutLaminateImage from "@/images/laminate - about-us 1.png";
const AboutUs = () => {
  return (
    <div className="abous_us">
    <AboutUs_timeline/>
    <Aboutus_vision/>
    <Aboutus_slide/>
     
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
