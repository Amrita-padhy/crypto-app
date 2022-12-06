import { Box } from "@chakra-ui/react";
import React from "react";

function Errors({ message }) {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {message}
    </Box>
  );
}

export default Errors;
