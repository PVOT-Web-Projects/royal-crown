import Link from "next/link";
import "./yellowButton.scss";

const YellowButton = ({ url, btn_text }) => {
  return (
    <Link href={url} class="yello_btn">
      <span class="button-content">{btn_text} </span>
    </Link>
  );
};
export default YellowButton;
