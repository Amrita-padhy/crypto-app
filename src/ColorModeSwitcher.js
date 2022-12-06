import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import React from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const SwitchIcon = useColorModeValue(BsFillMoonFill, BsFillSunFill);
  return (
    <IconButton
      variant={"ghost"}
      zIndex={"overlay"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      pos={"fixed"}
      top={4}
      right={4}
      size={"lg"}
    />
  );
};

export default ColorModeSwitcher;
