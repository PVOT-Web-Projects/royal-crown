import Image from "next/image";
import bigImage from "@/images/big_image_footer.png";
import "./bigImageWithSocial.scss"
import logo from "@/images/svgLogos/white_logo.svg";

const BigImageWithSocial = () => {
  return (
    <div className="big_image_with_social">
      <div className="wrapper">
        <div className="big_image">
          <Image src={bigImage} alt="bigImage" />
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BigImageWithSocial;
