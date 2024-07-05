import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import Aboutus_vision from "@/components/Aboutus_vision/page"
import "./Home.scss";
import AboutLaminate from "@/components/aboutLaminate/AboutLaminate";
import aboutLaminateImage from "@/images/laminate - about-us 1.png";
import MyForm from "@/components/forms/form1/Form";
const AboutUs = () => {
  return (
    <div className="abous_us">
    <Aboutus_vision/>
     
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <MyForm />
      </div>
    </div>
  );
};
export default AboutUs;
