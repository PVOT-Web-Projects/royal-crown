import Link from "next/link";
import "./linkHover.scss";
const LinkHover = ({ url, text, color, fontSize }) => {
  return (
    <Link
      href={url}
      style={{ color: color, fontSize: fontSize }}
      className={`linkHover`}
    >
      <span> {text}</span>
      <span> {text}</span>
    </Link>
  );
};
export default LinkHover;
