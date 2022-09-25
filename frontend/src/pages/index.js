import { Box, Heading, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Features from "../components/features";
import Layout from "../components/layout";
import Services from "../components/services";

export default function Home() {
  return (
    <Box>
      <Features />
      <Heading mt={5} mb={5}>
        Our Radiology Services
      </Heading>
      <Services></Services>
    </Box>
  );
}
