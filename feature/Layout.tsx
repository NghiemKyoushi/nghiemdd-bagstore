import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  useTheme,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import style from "./style.module.css";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  Search2Icon,
  MoonIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout(props: LayoutProps) {
  const theme = useTheme();

  // console.log(theme.)
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows={"65px 1fr 30px"}
        h="200px"
        gap="1"
        // color="#00000"
        // fontWeight="bold"
      >
        <GridItem
          position={"fixed"}
          style={{ width: "100%", height: 65 }}
          pl="2"
          bg="white"
          area={"header"}
          border={"1px solid black"}
        >
          <div className={style.header}>
            <Menu>
              <MenuButton
                size={"lg"}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                color={"black"}
              />
              <MenuList background={"white"}>
                <MenuItem icon={<AddIcon />}>BỘ SƯU TẬP</MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>SẢN PHẨM</MenuItem>
                <MenuItem icon={<RepeatIcon />}>DỊCH VỤ</MenuItem>
                <MenuItem icon={<EditIcon />}>TUYỂN DỤNG</MenuItem>
              </MenuList>
            </Menu>
            <Link href="/" >
              <Image src="https://img.cdn.vncdn.io/nvn/ncdn/store1/44395/logo_1633926209_Group.png" />
            </Link>
            <div className={style.iconHeader}>
              <Icon color={"grey"} as={Search2Icon} />
              <Icon onClick={toggleColorMode} color={"grey"} as={MoonIcon} />
            </div>
          </div>
        </GridItem>
        <GridItem pl="2" area={"main"}>
          {props.children}
        </GridItem>
        <GridItem
          pl="2"
          bg="black"
          color={"white"}
          textAlign={"center"}
          area={"footer"}
        >
          © LESAC, all rights reserved | Accepted principle | Security policy |
          Cookie policy
        </GridItem>
      </Grid>
    </>
  );
}
