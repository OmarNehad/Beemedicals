import { Box, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Appointment from "../components/appointment";
import Features from "../components/features";
import Layout from "../components/layout";
import Services from "../components/services";

export default function Home() {
  return (
    <Layout>
      <Box padding={20}>
        <Features></Features>
        <Text>Our Radiology Services</Text>
        <Services></Services>
        <Appointment></Appointment>
      </Box>
    </Layout>
  );
}
