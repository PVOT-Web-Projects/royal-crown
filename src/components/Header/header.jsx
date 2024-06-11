import Link from "next/link";
import logo from "@/images/svgLogos/header_logo.svg";
import logo2 from "@/images/svgLogos/header_crown_logo.svg";
import "./header.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Products</Link>
          </li>
          <li>
            <Link href={"#"}>What's New</Link>
          </li>
        </ul>
        <div className="logo">
          <Link href={"/"}>
            <Image src={logo} alt="header_logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link href={"#"}>catalogue</Link>
          </li>
          <li>
            <Link href={"#"}>Laminate Library</Link>
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
