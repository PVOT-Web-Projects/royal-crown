import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import Insightslider from "@/components/InsightSlider/insightslider1"
import "./Home.scss";

export default function Home() {
  return (
    <main className="main">
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form /> 
      </div>
      {/* <HeroBanner />
      <Headingwithbutton /> */}
      <Insightslider />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form /> 
      </div>
    </main>
  );
}
