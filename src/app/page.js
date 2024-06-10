import Form from "@/components/form/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import "./variables.scss"
export default function Home() {
  return (
    <main className="main">
     <h1>Home Page</h1>
     <div className="Form_Page">
     <SocialPage 
        socialMediaImgSrc={SocialMediaImg} 
      />
     <Form />
     </div>
    </main>
  );
}
