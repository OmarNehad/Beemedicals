// import Footer from "./footer";
import { Container } from "@chakra-ui/react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <Footer />
    </>
  );
}
