import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import "./Home.scss";
import "./variables.scss";
import CircularScroll from "@/components/Circularscroll/Circularscroll";
import Certification from "@/components/Certifications/Certification";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <Headingwithbutton />

      {/* <Insightslider /> */}
      <Certification />
      <CircularScroll/>
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </main>
  );
}
