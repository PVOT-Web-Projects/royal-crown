import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/form/Form";
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
export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <AboutUs />
      <Headingwithbutton />
      <PlyMarquee />
      <RoyalCrownSlider />

      <InsightSlider />
      <Certification />
      {/* <CircularScroll /> */}
      <ThreeDSlider />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </main>
  );
}
