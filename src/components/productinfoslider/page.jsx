"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "./productslider.scss";
import { FreeMode, Thumbs, Autoplay, Navigation, EffectFade } from "swiper/modules";
import testimonial1 from "@/images/productsliderImg1.png";
import YellowSubmitButton from "../buttons/yellowSubmitButton/YellowSubmitButton";
// import ShadowHeading from "../shadowHeading/ShadowHeading";
// import LogoImg from "../../images/crown_light_logo.png";

export default function ProductInfoSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="ProductInfoSliderMain">
      {/* <ShadowHeading text={"WHY ROYAL CROWN"}/> */}
      <div className="MainContainer" style={{ marginTop: "50px" }}>
        <div className="abc left">
          {/* <div className="LogoImg">
            <Image src={LogoImg} alt="none" />
          </div> */}
          <div className="Carousel_Slider_container">
            <Swiper
              className="mySwiper"
              modules={[FreeMode, Thumbs, Navigation, EffectFade]}
              slidesPerView={1}
              // autoplay={{
              //   delay: 2500,
              // }}
              // loop={true}
              // navigation={true}
              effect="fade"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1500}
              thumbs={{ swiper: thumbsSwiper }}
            >
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">VINTAGE VENEER - VV</p>
                  <p className="TextInner1">Peacefull</p>
                 <div className="TextButtonoUTER">
                 <p className="TextInnerCollection">
                    Collection/Compact Laminates/Standard Compacts/
                  </p>
                  <YellowSubmitButton btn_text={"Learn More"}/>
                 </div>
                </div>
              </SwiperSlide>
            
              <SwiperSlide>
              <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">VINTAGE VENEER - V1</p>
                  <p className="TextInner1">Peacefull</p>
                 <div className="TextButtonoUTER">
                 <p className="TextInnerCollection">
                    Collection/Compact Laminates/Standard Compacts/
                  </p>
                  <YellowSubmitButton btn_text={"Learn More"}/>
                 </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">VINTAGE VENEER - V2</p>
                  <p className="TextInner1">Peacefull</p>
                 <div className="TextButtonoUTER">
                 <p className="TextInnerCollection">
                    Collection/Compact Laminates/Standard Compacts/
                  </p>
                  <YellowSubmitButton btn_text={"Learn More"}/>
                 </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">VINTAGE VENEER - V3</p>
                  <p className="TextInner1">Peacefull</p>
                 <div className="TextButtonoUTER">
                 <p className="TextInnerCollection">
                    Collection/Compact Laminates/Standard Compacts/
                  </p>
                  <YellowSubmitButton btn_text={"Learn More"}/>
                 </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">VINTAGE VENEER - VV</p>
                  <p className="TextInner1">Peacefull</p>
                 <div className="TextButtonoUTER">
                 <p className="TextInnerCollection">
                    Collection/Compact Laminates/Standard Compacts/
                  </p>
                  <YellowSubmitButton btn_text={"Learn More"}/>
                 </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>

        <div className="abc right">
          {/* <div className="Rc_Text_Main">
            <p className="Rc_Text_MainInner">Royal Crown Laminates</p>
          </div> */}
          <div className="Carousel_Slider_container2">
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              // loop={true}
              // autoplay={{
              //   delay: 2500,
              // }}
              // navigation={true}
              slidesPerView={1}
              speed={1500}
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // }}
              // pagination={{
              //   dynamicBullets: true,
              // }}
              allowTouchMove={false}
              className="mySwiper2"
            >
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tenExp" style={{ marginBottom: "50px" }}>
            <div className="ProductInfoText">
              <p className="ProductInfoTextInner">Disclaimer:<span> Colours on screen may vary from actual product</span></p>
            </div>
            {/* <div>
              <p className="tenExpBorderTextInner">years of experience</p>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
