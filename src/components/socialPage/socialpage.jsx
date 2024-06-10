import React from "react";
import Image from "next/image";
import Footer_img from "../../images/royal_Crown_footer.png";
import facebookIcon from "@/images/FacebookIcon.svg";
import instagramIcon from '../../images/InstaIcon.svg';
import youtubeIcon from '../../images/YoutubeIcon.svg';
import whatsappIcon from '../../images/WhatsappIcon.svg';
import linkedinIcon from '../../images/LinkedinIcon.svg';
import "./socialpage.scss";
const SocialPage = ({socialMediaImgSrc }) => {
    const icons = [
        { src: facebookIcon, alt: 'Facebook', link: 'https://www.facebook.com' },
        { src: instagramIcon, alt: 'Instagram', link: 'https://www.instagram.com' },
        { src: youtubeIcon, alt: 'YouTube', link: 'https://www.youtube.com' },
        { src: whatsappIcon, alt: 'WhatsApp', link: 'https://www.whatsapp.com' },
        { src: linkedinIcon, alt: 'LinkedIn', link: 'https://www.linkedin.com' },
      ];
  return (
    <div className="socialPage">
      <div className="Footer_Logo">
        <Image src={Footer_img} alt="Image" />
      </div>
      <div className="SocialMediaImg">
        <Image src={socialMediaImgSrc} alt="Image" />
      </div>
      <div className="SocialMediaMain">
      {icons.map((item, index) => (
        <div className="SocialIcons">
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="Link">
          <Image src={item.src} alt={item.alt} className="ImageIconSvg"/>
        </a>
        </div>
      ))}
    </div>
    </div>
  );
};
export default SocialPage;
