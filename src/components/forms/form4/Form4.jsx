import Image from "next/image";
import image from "@/images/getInTouchImage.png";
import Form from "@/components/forms/form1/Form";
import "./form4.scss";

const Form4 = () => {
  return (
    <div className="form4">
      <div className="wrapper">
        <div className="image">
          <Image src={image} alt="get in touch" />
        </div>
        <div className="form4_wrap">
          <Form />
        </div>
      </div>
    </div>
  );
};
export default Form4;
