import {
  Container,
  Flex,
  Box,
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
} from "@chakra-ui/react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex justifyContent={"space-between"} flexWrap="wrap">
          <Box>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">First and Last Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                {...register("name", {
                  required: "This is required",
                })}
              />
            </FormControl>
            <p>{errors.name?.message}</p>
          </Box>

          <Box>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="name">Email Adress</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
            </FormControl>
            <p>{errors.email?.message}</p>
          </Box>
          <Box>
            <FormControl isInvalid={errors.subject}>
              <FormLabel htmlFor="name">Subject</FormLabel>
              <Input
                id="subject"
                placeholder="Subject"
                {...register("subject", {
                  required: "This is required",
                })}
              />
            </FormControl>
            <p>{errors.subject?.message}</p>
          </Box>
        </Flex>

        <FormControl isInvalid={errors.text}>
          <FormLabel htmlFor="text">Your Message to Us</FormLabel>
          <Textarea
            id="text"
            placeholder="Message"
            {...register("text", {
              required: "This is required",
              minLength: {
                value: 15,
                message:
                  "Minimum length is 15 characters, please be more describitve so that we can help you",
              },
            })}
          />
        </FormControl>
        <p>{errors.text?.message}</p>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
