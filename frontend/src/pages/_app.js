import { ChakraProvider, layout } from "@chakra-ui/react";
import "../styles/global.css";
import { CartProvider } from "react-use-cart";
import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp;
