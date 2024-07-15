import React from "react";
import "./relatedProduct.scss";
import Image from "next/image";
import Img1 from "@/images/PRODUCT1.png";
import Img2 from "@/images/PRODUCT2.png";
import Img3 from "@/images/PRODUCT3.png";
import Img4 from "@/images/PRODUCT4.png";
const RelatedProductInfo = () => {
  const Images = [
    {
      ProductImage: Img1,
    },
    {
      ProductImage: Img2,
    },
    {
      ProductImage: Img3,
    },
    {
      ProductImage: Img4,
    },
  ];
  return (
    <div className="RelatedProductMainContainer">
      <div className="RelatedProductHeader">
        <p className="RelatedProductHeaderText">RELATED PRODUCTS</p>
      </div>

      <div className="RelatedProductCards">
        {Images.map((item, index) => (
          <div key={index} className="RelatedProductCard">
            <Image
              src={item.ProductImage}
              alt="Related Product"
              className="ImageProductImg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductInfo;
