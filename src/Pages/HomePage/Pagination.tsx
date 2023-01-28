import { Button, Flex, IconButton } from "@chakra-ui/react";
import { ButtonConfiguration, hoverEffect } from "../../Themes/DesignPatterns";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../Hooks/yt_Hooks";
import { setPgToken } from "../../Redux/youtube.actions";
import { useCounter } from "../../Hooks/useCounter";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { ytData } = useAppSelector((store) => store.yt_M);
  const { count, increment, decrement } = useCounter(1, 1);
  const nextPage = ytData?.nextPageToken;
  const setNextToken = () => {
    increment();
    dispatch(setPgToken(nextPage ? nextPage : ""));
  };
  const prevPage = ytData?.prevPageToken;
  const setPrevToken = () => {
    decrement();
    dispatch(setPgToken(prevPage ? prevPage : ""));
  };
  return (
    <>
      <Flex justifyContent={"flex-end"} w={"100%"}>
        <Flex gap={1}>
          {/* PrevPage */}
          <IconButton
            isDisabled={!prevPage}
            onClick={setPrevToken}
            _hover={hoverEffect}
            {...ButtonConfiguration}
            aria-label="Search database"
            icon={<MdOutlineArrowBackIosNew />}
          />
          {/* PageNumber */}
          <Button isDisabled={true} _hover={hoverEffect} {...ButtonConfiguration}>
            {count}
          </Button>
          {/* NextPage */}
          <IconButton
            isDisabled={!nextPage}
            onClick={setNextToken}
            _hover={hoverEffect}
            {...ButtonConfiguration}
            aria-label="Search database"
            icon={<MdOutlineArrowForwardIos />}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Pagination;
