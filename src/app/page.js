import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import "./Home.scss";
import "./variables.scss";
import RoyalCrownSlider from "@/components/RoyalCrownSlider/RoyalCrownSlider";
import CircularScroll from "@/components/Circularscroll/Circularscroll";
import Certification from "@/components/Certifications/Certification";
import PlyMarquee from "@/components/plyMarquee/PlyMarquee";
import InsightSlider from "@/components/Insightslider/Insightslider1";
import AboutUs from "@/components/Aboutus/Aboutus";
import ThreeDSlider from "@/components/threeDSlider/ThreeDSlider";
import ThreeDSlider2 from "@/components/threeDSlider copy/ThreeDSlider";
import RotatingImages from "@/components/The rotating image/RotatingImages";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <AboutUs />
      {/* <ThreeDSlider2 /> */}
      {/* <div style={{height:"400px"}}></div> */}
      {/* <RotatingImages/> */}
      {/* <div style={{height:"850vh"}}></div> */}
      <Headingwithbutton />
      <PlyMarquee />
      <RoyalCrownSlider />

      <Certification />
      <InsightSlider />


      
      {/* <CircularScroll /> */}
      {/* <ThreeDSlider /> */}
      
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </main>
  );
}
