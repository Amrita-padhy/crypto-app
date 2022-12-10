import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import Errors from "./Errors";
import Loader from "./Loader";
import CoinDetails from "./CoinDetails";
import CoinCard from "./CoinCard";
import pagination from "react-js-pagination";

function Coins() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  // console.log(exchanges);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changePage = (page) => {
    setPage(page);
    setIsLoading(true);
  };

  const btns = new Array(132).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (isLoading) return <Loader />;

  if (error) return <Errors message={"Error While Fetching Coins..."} />;

  return (
    <Container maxW={"container.xl"}>
      <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
        <HStack>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"eur"}>EUR</Radio>
          <Radio value={"usd"}>USD</Radio>
        </HStack>
      </RadioGroup>
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {coins.map((item) => (
          <CoinCard
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.image}
            price={item.current_price}
            symbol={item.symbol}
            currencySymbol={currencySymbol}
          />
        ))}
      </HStack>
      <HStack w={"full"} overflowX={"auto"} p={"8"}>
        {btns.map((item, index) => (
          <Button
            key={index}
            bgColor={"blackAlpha.900"}
            color={"white"}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Container>
  );
}

export default Coins;
