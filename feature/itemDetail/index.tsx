import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  IconButton,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Layout from "../Layout";
import { Image } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import Head from "next/head";
import { SetStateAction, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function ItemDetail() {
  
  const [focus, setFocus] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleMouseOver = (i: number) => {
    setCurrentIndex(i);
    setFocus(false);

  };
  const handleMouseOut = () => {
    setFocus(true);
    // setCurrentIndex(-1)
  };

  const dataFake = [
    {
      url: "https://bucket.nhanh.vn/store1/44395/ps/20220829/fend_backpack.png",
    },
    {
      url: "https://bucket.nhanh.vn/store1/44395/ps/20220825/balo_den_2_min_thumb.png",
    },
    {
      url: "https://bucket.nhanh.vn/store1/44395/ps/20220825/balo_na__u_2_thumb.jpg",
    },
  ];
  return (
    <>
      <Layout>
        <Grid
          templateColumns="repeat(5, 1fr)"
          // templateRows="repeat(2, 1fr)"
          gap={3}
        >
          <GridItem colStart={2} w="100%" h="600">
            <Box boxSize="sm">
              <Image
                w="100%"
                h="550"
                src= {dataFake[currentIndex].url}
                alt="Dan Abramov"
              />
            </Box>
          </GridItem>
          <GridItem
            colStart={3}
            marginLeft={55}
            w="50%"
            h="650"
            display={"flex"}
            flexDirection={"column"}
            gap={3}
          >
            {dataFake.map((item, index) => {
              return (
                <Wrap
                  key={index}
                  onMouseOut={handleMouseOut}
                  onMouseOver={() => handleMouseOver(index)}
                  border={currentIndex === index ? "1px solid black" : "0px"}

                >
                  <Image
                    // transform={"rotate(-90deg)"}
                    w="95%"
                    h="150"
                    src={item.url}
                    alt="Dan Abramov"
                  />
                </Wrap>
              );
            })}
          </GridItem>
          <GridItem colStart={4} w="150%" h="657" bg="grey.500">
            <Text fontSize="lg" fontWeight={"bold"}>
              FEND BACKPACK
            </Text>
            <br />
            <Text fontSize={13} color={"#6b6b6b"} fontWeight="500">
              Quantity
            </Text>
            <Wrap
              marginTop={2}
              display={"flex"}
              flexDirection={"row"}
              gap={0.2}
            >
              <IconButton
                color={"black"}
                marginTop={15}
                backgroundColor={"white"}
                border={"1px solid grey"}
                size={"xs"}
                aria-label="Search database"
                icon={<MinusIcon boxSize={"1.5"} />}
              />
              <Input
                fontSize={13}
                defaultValue={1}
                htmlSize={2}
                width="10"
                height={"6"}
                textAlign="center"
                type={"number"}
              />
              <IconButton
                color={"black"}
                marginTop={15}
                backgroundColor={"white"}
                border={"1px solid grey"}
                size={"xs"}
                aria-label="Search database"
                icon={<AddIcon boxSize={"1.5"} />}
              />
            </Wrap>
            <Text
              fontSize={14}
              color={"#6b6b6b"}
              marginTop={3}
              fontWeight="600"
            >
              650.000 vn??
            </Text>
            <Wrap marginTop={10}>
              <Button
                colorScheme="#656565"
                size={"md"}
                variant="thin"
                width={"90%"}
              >
                ADD TO CARD
              </Button>
              <Button
                marginTop={5}
                colorScheme="#656565"
                size={"md"}
                variant="thin"
                width={"90%"}
              >
                BUY NOW
              </Button>
            </Wrap>
            <Wrap marginTop={10} fontSize={12}>
              <Tabs width={"90%"} isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab fontSize={14}>Product details</Tab>
                  <Tab fontSize={14}>Exchange and return</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>
                      Tr??n tr???ng nh???ng v??? ?????p t??? nhi??n nh???t c???a kh??ch h??ng,
                      LESAC mong mu???n mang l???i s??? t??? tin trong t???ng chi???c t??i
                      x??ch ???????c thi???t k??? ?????c bi???t cho ph??i n???.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      ??? V???i nh???ng tr?????ng h???p do l???i s???n xu???t, b???n c?? th??? 1 ?????i 1
                      trong 7 ng??y.
                    </p>
                    <p>
                      ??? LESAC mi???n ph?? b???o h??nh trong kho???ng 7-30 ng??y k??? t???
                      ng??y nh???n h??ng. ?????c bi???t, LESAC c?? h??? tr??? b???o h??nh cho ????n
                      h??ng mua sau 30 ng??y
                    </p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Wrap>
          </GridItem>
        </Grid>
      </Layout>
    </>
  );
}
