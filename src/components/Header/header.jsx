import Link from "next/link";
import "./header.scss";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/about-us"} >About Us</Link></li>
          <li><Link href={"/catalogue"} >catalogue</Link></li>
          <li><Link href={"/laminate-library"} >Laminate Library</Link></li>
          <li><Link href={"/products"} >Products</Link></li>
          <li><Link href={"/whats-new"} >Whats New</Link></li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
