import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Link,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Flex p={5} justifyContent="center">
      <Box position="relative">
        <chakra.a href={`/product/${product.slug}`}>
          <Image
            src={
              "https://demo.creativethemes.com/blocksy/modern-shop/wp-content/uploads/2020/03/micah-tindell-ysu9athq_BU-unsplash-300x400.jpg"
            }
            alt={`Picture of ${product.name}`}
            roundedTop="lg"
          />

          <Box p="3">
            <Flex
              direction={"column"}
              mt="1"
              justifyContent="space-between"
              alignContent="center"
            >
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h5"
                lineHeight="tight"
                isTruncated
              >
                {product.name}
              </Box>

              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                ${product.price}
              </Box>
            </Flex>
          </Box>
        </chakra.a>
        <Button
          mt={3}
          leftIcon={<FiShoppingCart />}
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images_urls[0],
              slug: product.slug,
            })
          }
        >
          Add to Cart
        </Button>
      </Box>
    </Flex>
  );
}
