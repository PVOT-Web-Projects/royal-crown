import Image from "next/image";
import "./aboutUs_Texture.scss";
import Crown from "../../images/crown11.png";
import image from "../../images/aboutUs_size_image1.png";
import ScrollSection from "../aboutUs_slide/page";

const AboutUs_Texture = () => {
  return (
    <div className="aboutUs_Texture_Container">
      <div className="aboutUs_Texture_Wrapper">
        <div className="left">
          <div className="heading-text">
            <p>Why</p>
            <p className="brown">Royal</p>
            <p className="brown">Crown?</p>
          </div>
          <div className="mini-box">
            <div className="image-section">
              <Image src={Crown} />
              <p>4.5</p>
            </div>
            <div className="mini_box_text">High Rating Reviews</div>
          </div>
        </div>
        <div className="right">
          <div className="box">{/* <Image src={image} /> */}</div>
          <div className="size-section">
            <div className="size-box">
              <p>Sizes</p>
            </div>
            <div className="sidecard">
              <div className="sideCard_text">1220 x 2440mm</div>
              <div className="sideCard_text">1220 x 3050mm</div>
              <div className="sideCard_text">1310 x 3050mm</div>
              <div className="sideCard_text">1520 x 3050mm</div>
              <div className="sideCard_text">1845 x 3670mm</div>
              <div className="sideCard_text">1860 x 4300mm</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="stats-section">
        <div className="border-wrapper">
          <div className="stat-box">
            <p className="stat-number">100+</p>
            <p className="stat-label">Textures</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">2000+</p>
            <p className="stat-label">SKUs</p>
          </div>
        </div>
        <div className="button">
          <button className="more-button">More...</button>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs_Texture;
