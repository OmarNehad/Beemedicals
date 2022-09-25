import { Flex, SimpleGrid, Box } from "@chakra-ui/react";
import ProductCard from "./productCard";

export default function ProductsGrid({ products }) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }}>
      {/* TODO: Handle 404 pages */}
      {products.map((product) => (
        <Box key={product.id}>
          <ProductCard product={product} />
        </Box>
      ))}
    </SimpleGrid>
  );
}
