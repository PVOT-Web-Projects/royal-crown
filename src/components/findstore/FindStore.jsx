
import styles from "./findstore.module.css";
import Image from "next/image";
import ImageLogo from "../../images/svgLogos/white_logo.svg";
const FindStore = () => {
  return (
    <div className={styles.FindStoreContainer}>
      <div className={styles.FindStoreInnerContainer}>
        {/* first container flex */}
        <div className={styles.FindStoreInnerFirst}>
          {/* <h1>first container</h1> */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0578930659026!2d72.49071127591135!3d22.984898517731924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aeb23c7e7e7%3A0xd34044573492f3c0!2sRoyal%20Art%20Laminates!5e0!3m2!1sen!2sin!4v1720691503627!5m2!1sen!2sin"
              allowfullscreen=""
              className={styles.MapFrame}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* second container flex */}
        <div className={styles.FindStoreInnerSecond}>
          <div className={styles.ImageLogoOuter}>
            <Image src={ImageLogo}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindStore;
