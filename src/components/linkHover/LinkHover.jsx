import Link from "next/link";
import "./linkHover.scss";
const LinkHover = ({ url, text, color, borderColor, fontSize }) => {
  return (
    <Link
      href={url}
      style={{ color: color, fontSize: fontSize }}
      className={`linkHover ${borderColor}`}
    >
      <span> {text}</span>
      <span> {text}</span>
    </Link>
  );
};
export default LinkHover;
