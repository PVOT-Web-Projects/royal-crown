"use client";

import Link from "next/link";
import logo from "@/images/svgLogos/header_logo.svg";
import logo2 from "@/images/svgLogos/header_crown_logo.svg";
import "./header.scss";
import Image from "next/image";
import LinkHover from "../linkHover/LinkHover";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"/about-us"} text={"About Us"} fontSize={"16px"} />
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"Products"} fontSize={"16px"} />
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"What's New"} fontSize={"16px"} />
          </motion.li>
        </ul>
        <motion.div
          className="logo"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          <Link href={"/"}>
            <Image src={logo} alt="header_logo" />
          </Link>
        </motion.div>
        <ul>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.6,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"Catalogue"} fontSize={"16px"} />
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"Laminate Library"} fontSize={"16px"} />
          </motion.li>
          <div className="side_logo">
            <Image src={logo2} alt="header_crown_logo" />
          </div>
        </ul>
      </nav>
    </header> 
  );
};
export default Header;
