import { Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Errors from "./Errors";
import Loader from "./Loader";
import { server } from "../index";
import axios from "axios";

function CoinDetails() {
  const [coin, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const params = useParams;

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log(data);
        setCoin(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    };
    fetchCoin();
  }, [params.id]);
  if (isLoading) return <Loader />;
  if (error) return <Errors message={"Error While Fetching Coins..."} />;
  return <Container w={"container.xl"}>{coin}</Container>;
}

export default CoinDetails;
