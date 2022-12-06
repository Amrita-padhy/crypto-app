import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ExchangeCard({ name, img, rank, url }) {
  return (
    <a href={url} target={"blank"}>
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
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
}
export default ExchangeCard;
