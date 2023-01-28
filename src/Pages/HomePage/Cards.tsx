import { Avatar, Flex, Image, Show, Text } from "@chakra-ui/react";
import { Item } from "../../Constants/Interfaces";
import { TimeConverter } from "../../Hooks/TimeConverter";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/yt_Hooks";
import { getSingleData } from "../../Redux/youtube.actions";
interface cardProp {
  el: Item;
}

const Cards = ({ el }: cardProp) => {
  const { channelTitle, description, publishTime, title } = el.snippet;
  const ConvertedTime = TimeConverter(publishTime);
  const myNav = useNavigate();
  const dispatch = useAppDispatch();
  const { url } = el.snippet.thumbnails.high;
  const setSingleDataFun = () => {
    dispatch(getSingleData(el));

    setTimeout(() => {
      myNav("/video");
    }, 200);
  };
  return (
    <>
      <Show above="sm">
        <Flex onClick={setSingleDataFun} border={8} p={2} boxShadow={"md"} direction={"column"}>
          <Image src={url} alt={title} />
          <Text noOfLines={1} as={"b"}>
            {title}
          </Text>
          <Flex mt={2} alignItems={"center"} gap={2}>
            <Avatar size="md" name={channelTitle} src="" />
            <Flex direction={"column"}>
              <Text noOfLines={1} fontSize={"sm"} color={"gray"}>
                {channelTitle}
              </Text>
              <Text noOfLines={1} fontSize={"sm"}>
                {description}
              </Text>
              <Text noOfLines={1} fontSize={"xs"} color={"gray"}>
                {ConvertedTime}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Show>
      {/* Mobile View */}
      <Show below="sm">
        <Flex onClick={setSingleDataFun} p={2} boxShadow={"md"} gap={2}>
          <Flex flex={3}>
            <Image w={"140px"} src={url} alt={title} />
          </Flex>
          <Flex flex={7} direction={"column"}>
            <Text noOfLines={1} as={"b"}>
              {title}
            </Text>
            <Text noOfLines={1} fontSize={"sm"} color={"gray"}>
              {channelTitle}
            </Text>
            <Text noOfLines={1} fontSize={"sm"}>
              {description}
            </Text>
            <Text noOfLines={1} fontSize={"xs"} color={"gray"}>
              {ConvertedTime}
            </Text>
          </Flex>
        </Flex>
      </Show>
    </>
  );
};

export default Cards;
