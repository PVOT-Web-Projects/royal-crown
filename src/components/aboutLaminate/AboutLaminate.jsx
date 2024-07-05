import Image from "next/image";
import "./aboutLaminate.scss";

const AboutLaminate = ({ heading, text, leftText, rightText, image }) => {
  return (
    <div className="about_laminate">
      <div className="wrapper">
        <div className="left">
          <div className="heading_text">
            <div className="heading">{heading}</div>
            <div className="text">{text}</div>
          </div>
          <div className="bottom_text">
            <div className="left_text">{leftText}</div>
            <div className="right_text">{rightText}</div>
          </div>
        </div>
        <div className="right">
          <div className="right_image">
            <Image src={image} alt={heading} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutLaminate;
