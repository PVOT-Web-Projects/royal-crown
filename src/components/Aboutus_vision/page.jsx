import React from 'react'
import Image from 'next/image'
import AboutUs_vision from "../../images/aboutUs_vision_image.webp"
import vision_playButton from "@/images/svgLogos/vision_playButton.svg"
import "./aboutus_vision.scss"
const page = () => {
  return (
    <>
    <div class="aboutUs_vision_outer">
        <div class="aboutUs_vision">
            <div class="vision_heading">VISION</div>
            <div class="vision_text">From our infant days we have carved ourselves as renowned manufacturers and exporters of premium grade decorative laminates.</div>
        </div>
        <div class="vision_image_outer">
        <Image class="vision_image"
      src={AboutUs_vision}
      alt="Picture of the author"
    />
    <Image class="vision_playButton"
      src={vision_playButton}
      alt="Picture of the author"
    />

        </div>
    </div>
    
      
    </>
  )
}

export default page
