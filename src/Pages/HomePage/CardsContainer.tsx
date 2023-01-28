import { Flex, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { useAppDispatch } from "../../Hooks/yt_Hooks";
import { useAppSelector } from "../../Hooks/yt_Hooks";
import { getYTData } from "../../Redux/youtube.actions";
import { Item } from "../../Constants/Interfaces";

const CardsContainer = () => {
  const dispatch = useAppDispatch();
  const { ytData, loading, error, order, pgToken, query } = useAppSelector((store) => store.yt_M);

  useEffect(() => {
    // order, pageToken, Query for Search
    dispatch(getYTData(order, pgToken, query));
  }, [order, pgToken, query]);

  return (
    <>
      <Flex direction={"column"} m={"1"}>
        {/* Cards Will Be Mapped Here */}
        <Pagination />
        {loading ? (
          <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Spinner thickness="10px" speed="0.65s" emptyColor="gray.200" color="green.500" size="xl" />
          </Flex>
        ) : error ? (
          <Flex w={"100%"} h={"100vh"} justifyContent={"center"} direction={"column"} alignItems={"center"}>
            <Image w={"100px"} src={"https://pngimage.net/wp-content/uploads/2018/06/fleche-youtube-png-3.png"} alt={"error"} />
            <Text>Something Went Wrong with API...</Text>
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={3}>
            {ytData.items?.map((el: Item, id: number) => {
              return <Cards key={id} el={el} />;
            })}
          </SimpleGrid>
        )}
        <Pagination />
      </Flex>
    </>
  );
};

export default CardsContainer;
