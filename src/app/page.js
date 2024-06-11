import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Certification from "@/components/Certifications/Certification";
import Insightslider from "@/components/Insightslider/Insightslider";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <Headingwithbutton />
      <Certification/>
      <Insightslider/>
    </main>
  );
}
