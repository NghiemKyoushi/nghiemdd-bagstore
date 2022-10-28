/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/router'

type itemProp = {
  name: string;
  price: number;
  image: string;
};
export default function Item(props: itemProp) {
  const router = useRouter()

  const [focus, setFocus] = useState(true);
  const handleMouseOver = () => {
    setFocus(false);
  };
  const handleMouseOut = () => {
    setFocus(true);
  };
  const handleClick= () => {
    router.push('/itemdetail')
  }
  return (
    <Box
      maxW="18%"
      borderRadius="dm"
      border={focus ? "0px" : "1px solid black"}
      overflow="hidden"
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <Image onClick={() => handleClick()} sizes="sm" height={"100%"} src={props.image} />
      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {props.name}
        </Box>
        <Box>
          {props.price}
          <Box as="span" color="gray.600" fontSize="sm">
            ₫
          </Box>
        </Box>
        <Box paddingTop={5}>
            <Button colorScheme="#656565" visibility={focus ? "hidden" : "visible"} size={"md"} variant="solid">
              Add to card
            </Button>
        </Box>
      </Box>
    </Box>
  );
}
