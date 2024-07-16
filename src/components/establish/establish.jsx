"use client";
import Image from "next/image";
import timeLine from "../../images/aboutUs_timeline_image.png";
import icon from "../../images/crown11.png";
import "./establish.scss"

const Establish = () => {
  return (
    <div className="establish">
      <div className="establishment_wrapper">
        <div className="left">
            <div className="year">
                1993
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam pariatur illum tenetur voluptatem blanditiis nostrum quae quis cum amet!
            </div>
        </div>
        <div className="right">
            <Image src={timeLine} />
        </div>
      </div>
    </div>
  );
};
export default Establish;
