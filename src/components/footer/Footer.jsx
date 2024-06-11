import Link from "next/link";
import "./footer.scss";
import LinkHover from "../linkHover/LinkHover";

const footerUrls = [
  {
    url1: "#",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
  {
    url1: "#",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
  {
    url1: "#",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
  {
    url1: "#",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
  {
    url1: "#",
    url1Text: "About",
    url2: "#",
    url2Text: "Annual Return",
  },
];

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          {/* <li><Link href={"#"}>About</Link></li>
          <li><Link href={"#"}>Annual Return</Link></li> */}
          <LinkHover
            url={"#"}
            text={"About"}
            color={"#fff"}
            borderColor={"white"}
            fontSize={"16px"}
          />
        </ul>
        <ul>
          <li>
            <Link href={"#"}>Corporate Social Responsibility</Link>
          </li>
          <li>
            <Link href={"#"}>Vigil Mechanism Policy</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>Career</Link>
          </li>
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>Copyright 2024</Link>
          </li>
          <li>
            <Link href={"#"}>Royal Crown Laminates</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"#"}>+91 9904990400</Link>
          </li>
          <li>
            <Link href={"#"}>info@royalcrown.com</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
