import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import ProductBanner from "@/components/Product_banner/page";
import AboutUs_products from "@/components/aboutUs_products/page";
import Cursor from "@/components/Cursor/page"
import "./product.scss";
const AboutUs = () => {
  return (
    <div className="abous_us">
    <Cursor/>
     <ProductBanner/>
     <AboutUs_products/>
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
