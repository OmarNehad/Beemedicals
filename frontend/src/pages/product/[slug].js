import ProductsGrid from "../../components/productsGrid";
import {
  Image,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Container,
  Heading,
} from "@chakra-ui/react";
export default function Product(product) {
  product = product.data;
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={5}>
        <Image
          src={
            "https://demo.creativethemes.com/blocksy/modern-shop/wp-content/uploads/2020/03/micah-tindell-ysu9athq_BU-unsplash.jpg"
          }
        />
        <Box>
          <Heading mb="5px">{product.name}</Heading>
          <Text mb="5px" fontSize={"xl"}>
            ${product.price}
          </Text>
          <Text>{product.short_description}</Text>
        </Box>
      </SimpleGrid>
      <Heading mb={5}>Description</Heading>
      <Text>{product.description}</Text>
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
