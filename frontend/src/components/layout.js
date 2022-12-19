// import Footer from "./footer";
import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Box
          maxW={{ base: "3xl", lg: "8xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          pt={{ base: "12", md: "16", lg: "24" }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
}
