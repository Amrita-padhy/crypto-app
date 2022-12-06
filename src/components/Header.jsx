import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ColorModeSwitcher from "../ColorModeSwitcher";

function Header() {
  return (
    <HStack bgColor={"blackAlpha.900"} shadow={"base"} p={"4"}>
      <Box>
        <Button variant={"unstyled"} color={"whiteAlpha.900"} mr={"1"}>
          <Link to={"/"}> Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"whiteAlpha.900"} mr={"1"}>
          <Link to={"/exchanges"}> Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"whiteAlpha.900"}>
          <Link to={"/coins"}> Coins</Link>
        </Button>
      </Box>
      <ColorModeSwitcher />
    </HStack>
  );
}

export default Header;
