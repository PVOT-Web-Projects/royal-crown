import Form from "@/components/forms/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import Aboutus_vision from "@/components/Aboutus_vision/page"
import "./Home.scss";
import AboutLaminate from "@/components/aboutLaminate/AboutLaminate";
import aboutLaminateImage from "@/images/laminate - about-us 1.png";
const AboutUs = () => {
  return (
    <div className="abous_us">
    <Aboutus_vision/>
     
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
