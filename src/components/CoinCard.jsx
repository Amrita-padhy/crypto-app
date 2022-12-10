import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function CoinCard({ id, name, img, price, currencySymbol, symbol }) {
  return (
    <Link to={`/coins/${id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        borderRadius={"lg"}
        p={"8"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover ": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image src={img} VStage w={"10"} h={"10"} objectFit={"contain"} />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
}

export default CoinCard;
