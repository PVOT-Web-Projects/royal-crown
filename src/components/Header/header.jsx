import Link from "next/link";
import "./header.scss";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link href="/products" legacyBehavior>Home</Link></li>
          <li><Link href={"/about-us"} legacyBehavior>About Us</Link></li>
          <li><Link href={"/catalogue"} legacyBehavior>catalogue</Link></li>
          <li><Link href={"/laminate-library"} legacyBehavior>Laminate Library</Link></li>
          <li><Link href={"/products"} legacyBehavior>Products</Link></li>
          <li><Link href={"/whats-new"} legacyBehavior>Whats New</Link></li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
