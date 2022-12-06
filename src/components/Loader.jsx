import { Box, Button, Image, VStack } from "@chakra-ui/react";
import React from "react";
import loader from "../assets/Ball-1s-200px.svg";

function Loader() {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image src={loader} />
      {/* Loader */}
    </Box>
  );
}

export default Loader;
