import Link from "next/link";
import "./header.scss";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us" legacyBehavior>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/catalogue" legacyBehavior>
              <a>Catalogue</a>
            </Link>
          </li>
          <li>
            <Link href="/laminate-library" legacyBehavior>
              <a>Laminate Library</a>
            </Link>
          </li>
          <li>
            <Link href="/products" legacyBehavior>
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/whats-new" legacyBehavior>
              <a>Whats New</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
