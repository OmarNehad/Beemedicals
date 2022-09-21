import {
  Container,
  Flex,
  Box,
  Grid,
  Heading,
  Text,
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

export default function Category(products) {
  return (
    <Layout>
      <Grid>
        {products.data.map((product) => (
          <GridItem key={product.id}>
            <h1>{product}</h1>
          </GridItem>
        ))}
      </Grid>
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
