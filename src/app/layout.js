
import HeaderCopy from "../components/header copy/Header";
import "./globals.scss";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Royal Crown",
  description: "Royal Crown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <HeaderCopy />
        {children}
        <Footer />
      </body>
    </html>
  );
}
