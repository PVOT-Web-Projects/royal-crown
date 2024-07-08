import Image from "next/image";
import "./aboutLaminate.scss";
import crown from '../../images/crown11.png';

const AboutLaminate = ({ heading, text, leftText, rightText, image }) => {
  return (
    <div className="about_laminate">
      <div className="wrapper">
      <div className="right">
          <div className="right_aboutus">ABOUT <br/> US</div>
          <div className="right_image">
            <Image src={image} alt={heading} />
          </div>
          <div className="scroll_down">SCROLL <br/>DOWN</div>
        </div>
        <div className="left">
          <div className="heading_text">
            <div className="heading">{heading}</div>
            <div className="text">{text}</div>
            <div className="text">{text}</div>
          </div>
          <div className="bottom_text">
            <Image src={crown} alt="crown"/>
            <div className="right_text">{rightText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutLaminate;
