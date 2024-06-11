import Link from "next/link";
import "./linkHover.scss";
const LinkHover = ({ url, text, color, borderColor, fontSize }) => {
  return (
    <Link
      href={url}
      style={{ color: color, fontSize: fontSize }}
      className={borderColor}
    >
      {text}
    </Link>
  );
};
export default LinkHover;
