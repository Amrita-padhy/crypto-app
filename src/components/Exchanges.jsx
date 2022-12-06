import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Errors from "./Errors";
function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(exchanges);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
  }, []);
  if (error) return <Errors message={"Error while fetching exchanges..."} />;

  return (
    <Container maxW={"container.xl"}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((item) => (
              <ExchangeCard
                key={item.id}
                name={item.name}
                img={item.image}
                url={item.url}
                rank={item.trust_score_rank}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}

export default Exchanges;
