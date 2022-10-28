import Layout from "../Layout";
import { Image, Box, Text, Flex, Container, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import style from "./style.module.css";
import Item from "../../component/Item/Item";
const dataFake = [
  {
    name: "FEND BACKPACK",
    price: 400000,
    image:
      "https://img.cdn.vncdn.io/nvn/ncdn/store1/44395/ps/20220829/sol_thumb.png",
  },
  {
    name: "FEND BACKPACK",
    price: 400000,
    image:
      "https://img.cdn.vncdn.io/nvn/ncdn/store1/44395/ps/20220829/sol_thumb.png",
  },
  {
    name: "FEND BACKPACK",
    price: 400000,
    image:
      "https://img.cdn.vncdn.io/nvn/ncdn/store1/44395/ps/20220829/sol_thumb.png",
  },
];
export default function HomePage(params: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Layout>
        <Box w="100%">
          <Image src="https://traffic-edge48.cdn.vncdn.io/nvn/ncdn/store1/44395/bn/banner_w2.jpg" />
        </Box>
        <Text textAlign={"center"} marginTop={20} fontSize="4xl">
          CÓ GÌ MỚI ?
        </Text>

        <Container centerContent marginTop={20}>
          <Flex
            minWidth="max-content"
            alignItems="center"
            justifyContent="center"
            gap="8 "
          >
            {dataFake.map((item, index) => {
              return (
                <Item
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              );
            })}
          </Flex>
        </Container>
        <Box w="100%">
          <Image width={"100%"} src="https://storage.googleapis.com/cdn.nhanh.vn/store1/44395/bn/a__nh_web4.jpg" />
        </Box>
      </Layout>
    </>
  );
}
