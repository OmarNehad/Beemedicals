import ProductsGrid from "../../components/productsGrid";
import { Box } from "@chakra-ui/react";
export default function Product(product) {
  return (
    <Box>
      <p>{JSON.stringify(product.data)} </p>
    </Box>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://127.0.0.1:8000/api/all-products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/product/${params.slug}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
