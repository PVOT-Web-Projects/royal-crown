import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import "./variables.scss";
import CircularScroll from "@/components/Circularscroll/Circularscroll";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <Headingwithbutton />
      <CircularScroll/>
    </main>
  );
}
