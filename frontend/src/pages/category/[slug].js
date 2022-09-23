import {
  Container,
  Flex,
  Box,
  Grid,
  Heading,
  Text,
  SimpleGrid,
  IconButton,
  Button,
  VStack,
  HStack,
  Stack,
  InputRightElement,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Textarea,
  Spacer,
  Modal,
  GridItem,
} from "@chakra-ui/react";
import Layout from "../../components/layout";
import ProductCard from "../../components/productCard";

export default function Category(products) {
  return (
    <Layout>
      <Flex>
        <SimpleGrid columns={{ md: 1, lg: 3 }} justifyItems="center">
          {/* TODO: Handle 404 pages */}
          {products.data.map((product) => (
            <Box key={product.id}>
              <ProductCard
                name={product.name}
                shortDes={product.short_description}
                price={product.price}
                stock={product.stock}
                MainImage={product.images_urls[0]}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://127.0.0.1:8000/api/all-categories");
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/category/${params.slug}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
