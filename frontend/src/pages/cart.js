import { useCart } from "react-use-cart";
import Layout from "../components/layout";
import {
  Image,
  Spacer,
  Text,
  Container,
  Flex,
  Box,
  Table,
  Thead,
  ButtonGroup,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Icon,
  chakra,
  Button,
  Tooltip,
  SimpleGrid,
  Tab,
} from "@chakra-ui/react";

import { HiTrash } from "react-icons/hi";

export default function Cart() {
  const {
    cartTotal,
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <Heading>Quota is Empty</Heading>

        <Button as="a" href="/products" mt={"10"}>
          Return to shop
        </Button>
      </>
    );

  return (
    <>
      <Heading>Quota of {totalUniqueItems} items</Heading>
      <Flex>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <Flex>
                      <Image h={"150"} maxW={"100%"} src={item.image} />
                      <Flex pl={"10"} direction={"column"}>
                        <Text mb={"5"}>{item.name}</Text>
                        <Text>${item.price}</Text>
                      </Flex>
                    </Flex>
                  </Td>

                  <Td>
                    <Flex
                      justify={"space-between"}
                      borderWidth={"1px"}
                      borderColor="black"
                    >
                      <ButtonGroup size={"sm"} variant="ghost">
                        <Button
                          m={1}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                        <Text alignSelf={"center"}>{item.quantity}</Text>

                        <Button
                          m={1}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                      </ButtonGroup>
                    </Flex>
                  </Td>
                  <Td isNumeric>{item.price * item.quantity}</Td>
                  <Td>
                    <Icon
                      as={HiTrash}
                      onClick={() => updateItemQuantity(item.id, 0)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Spacer />
        <Box borderWidth={"1px"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            Quota Total
          </Text>
          <Flex>
            <Text> Total </Text>
            <Spacer />
            <Text>{cartTotal}</Text>
          </Flex>
          <Button width={"100%"}>Proceed</Button>
        </Box>
      </Flex>
    </>
  );
}
