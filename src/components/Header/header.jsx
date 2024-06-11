import Link from "next/link";
import logo from "@/images/svgLogos/header_logo.svg";
import logo2 from "@/images/svgLogos/header_crown_logo.svg";
import "./header.scss";
import Image from "next/image";
import LinkHover from "../linkHover/LinkHover";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <LinkHover url={"#"} text={"About Us"} fontSize={"16px"} />
          </li>
          <li>
            <LinkHover url={"#"} text={"Products"} fontSize={"16px"} />
          </li>
          <li>
            <LinkHover url={"#"} text={"What's New"} fontSize={"16px"} />
          </li>
        </ul>
        <div className="logo">
          <Link href={"/"}>
            <Image src={logo} alt="header_logo" />
          </Link>
        </div>
        <ul>
          <li>
            <LinkHover url={"#"} text={"Catalogue"} fontSize={"16px"} />
          </li>
          <li>
            <LinkHover url={"#"} text={"Laminate Library"} fontSize={"16px"} />
          </li>
          <div className="side_logo">
            <Image src={logo2} alt="header_crown_logo" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
