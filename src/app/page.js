import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <Headingwithbutton />
      <Form />
    </main>
  );
}
