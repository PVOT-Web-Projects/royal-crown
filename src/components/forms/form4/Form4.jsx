"use client";

import Image from "next/image";
import image from "@/images/getInTouchImage.png";
import Form from "@/components/forms/form1/Form";
import "./form4.scss";
import { useState } from "react";
import ClickHandler from "@/components/buttons/clickHandler/ClickHandler";

const Form4 = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <div className="form4">
      <div className="form4_inner">
        <div className={`wrapper ${showForm ? "show" : "hide"}`}>
          <div className="image">
            <Image src={image} alt="get in touch" />
          </div>
          <div className="form4_wrap">
            <Form />
          </div>
          <div className="btn">
            <ClickHandler btn_text={"Let’s Get In Touch."} handleClick={handleClick} />
          </div>
        </div>
        <div className="right_image">
          <Image src={image} alt="get in touch" />
        </div>
      </div>
    </div>
  );
};
export default Form4;
