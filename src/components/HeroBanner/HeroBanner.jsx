import Image from "next/image";
import Link from "next/link";
import banner from "@/images/hero_banner.png";
import "./heroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <div className="banner_image">
        <Image src={banner} alt="banner" />
        <div className="banner_text">
          <h2>
            THE <br /> CROWN <br /> EXPERIENCE
          </h2>
          <p>
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
            dolor Lorem ipsum dolor Lorem ipsum dolor
          </p>
          <div className="link">
            <Link href={"#"}>Let's Start</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
