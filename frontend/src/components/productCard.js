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
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard(data) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box maxW="sm" shadow="lg" position="relative">
        <Image
          maxH={"50vh"}
          src="https://demo.creativethemes.com/blocksy/modern-shop/wp-content/uploads/2020/03/micah-tindell-ysu9athq_BU-unsplash-600x800.jpg"
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="3">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Flex direction={"column"}>
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h5"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
              <Box as="p" lineHeight="tight" isTruncated>
                {data.shortDes}
              </Box>
            </Flex>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box color={data.stock > 22 ? "green" : "red"} fontStyle={"italic"}>
              Stock avalaible: {data.stock}
            </Box>

            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {data.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
