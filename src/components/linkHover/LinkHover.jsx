import Link from "next/link";
import "./linkHover.scss";
import PageTransition from "../pageTransition/PageTransition";
const LinkHover = ({ url, text, color, fontSize, textTransform, HoverBtn,  children }) => {
  return (
    <PageTransition
      href={url}
      style={{ color: color, fontSize: fontSize, textTransform:textTransform }}
      className={`linkHover`}
    >
      <span> {text}</span>
      <span style={{color: HoverBtn}}>{text}</span>
    </PageTransition>
  );
};
export default LinkHover;
