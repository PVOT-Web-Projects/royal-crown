import React from "react";
import "./aboutUs_product.scss";
import Image from "next/image";
import filterImage1 from "@/images/filter_image1.png";
import filterImage2 from "@/images/filter_image2.png";
import filterImage3 from "@/images/filter_image3.png";
import filterImage4 from "@/images/filter_image4.png";
import filterImage5 from "@/images/filter_image5.png";
import filterImage6 from "@/images/filter_image6.png";
import filterImage7 from "@/images/filter_image7.png";
import filterImage8 from "@/images/filter_image8.png";
import filterImage9 from "@/images/filter_image9.png";
import filterImage10 from "@/images/filter_image10.png";
const page = () => {
  return (
    <>
      <div class="products_name">EXPLORE PRODUCTS</div>

    <div class="supply">
      <div class="one">one</div>
      <div class="container"> 
    <div class="tall"><Image src={filterImage1} alt="picsum"/></div>
    <div><Image src={filterImage2} alt="picsum"/></div>
    <div class="tall"><Image src={filterImage3} alt="picsum"/></div>
    <div class="tall" ><Image src={filterImage4} alt="picsum"/></div>
    <div class=""><Image src={filterImage5} alt="picsum"/></div>
    <div class=""><Image src={filterImage6} alt="picsum"/></div>
    <div class=""><Image src={filterImage7} alt="picsum"/></div>
    <div class="tall"><Image src={filterImage8} alt="picsum"/></div>
    <div class="tall"><Image src={filterImage9} alt="picsum"/></div>
    <div class="big"><Image src={filterImage10} alt="picsum"/></div>
    <div class="tall"><Image src={filterImage1} alt="picsum"/></div>
    <div><Image src={filterImage1} alt="picsum"/></div>
    {/* <div><Image src={filterImage2} alt="picsum"/></div>
    <div><Image src={filterImage3} alt="picsum"/></div>
    <div><Image src={filterImage4} alt="picsum"/></div>
    <div class="big"><Image src={filterImage5} alt="picsum"/></div>
    <div><Image src={filterImage6} alt="picsum"/></div>
    <div><Image src={filterImage7} alt="picsum"/></div>
    <div><Image src={filterImage8} alt="picsum"/></div>
    <div class="wide"><Image src={filterImage9} alt="picsum"/></div>
    <div><Image src={filterImage10} alt="picsum"/></div>
    <div><Image src={filterImage1} alt="picsum"/></div>
    <div><Image src={filterImage2} alt="picsum"/></div>
    <div><Image src={filterImage3} alt="picsum"/></div> */}
  </div>
    </div>

    </>
  );
};

export default page;
