import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Stack,
  Text,
  Grid,
  GridItem,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

import Image from "next/image";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ServerQuickActions = () => {
  return (
    <Tabs isLazy colorScheme="red">
      <TabList>
        {ALL_SERVICES.map((item, i) => (
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            fontWeight="bold"
            w="100%"
            key={i}
          >
            <Box textAlign={"center"}>
              <img src={item.logoUrl} />
              <Text fontWeight={600}> {item.logoTitle}</Text>
            </Box>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {ALL_SERVICES.map((item, i) => (
          <TabPanel key={i}>
            <SimpleGrid columns={{ md: 1, lg: 2 }} justifyItems="center">
              <Box padding={4}>
                <Text fontSize={"4xl"} fontWeight={600}>
                  {item.logoTitle}
                </Text>
                <Text> {item.desc}</Text>
              </Box>
              <Box>
                <img src={item.imageUrl} />
              </Box>
            </SimpleGrid>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ServerQuickActions;

const ALL_SERVICES = [
  {
    logoUrl: "https://www.cairoscan.com.eg/En/images/noun_Mammogram.png",
    logoTitle: "Women Imaging",
    title: "Women's Imaging",
    desc: `
        Women's Health As a part of our ongoing commitment to our valued
        clients, we dedicated a special unit for Women's Imaging offering More
        comfort and privacy.
       
        This unit is equipped with state of the art Digital
        mammography unit. In addition, the unit is equipped with a latest
        Ultrasound machines to cater to the ever present demand for an exclusive
        women's imaging.`,
    imageUrl: "https://www.cairoscan.com.eg/En/images/resources/DSC_6114wm.png",
  },
  {
    logoUrl: "https://www.cairoscan.com.eg/En/images/mri_ico.png",
    logoTitle: "MRI",
    title: "Magnetic Resonance Imaging (MRI)",
    desc: `
        MRI is noninvasive and does not use ionizing radiation that helps
        physicians diagnose and treat medical conditions. Magnetic resonance
        imaging (MRI) uses a powerful magnetic field, radio waves and a computer
        to produce detailed pictures of the body's internal structures that are
        clearer, more detailed and more likely in some instances to identify and
        accurately characterize disease than other imaging methods.`,

    imageUrl: "https://www.cairoscan.com.eg/En/images/tests/MRI%20(2).jpg",
  },
];
