import { Avatar, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import CopyrightClaim from "../../Components/CopyrightClaim";
import NavbarComp from "../../Components/NavbarComp";
import { Item } from "../../Constants/Interfaces";
import { TimeConverter } from "../../Hooks/TimeConverter";

type Props = {
  singleData: Item;
};

const VideoViewPage = ({ singleData }: Props) => {
  const dateAndTime = TimeConverter(singleData.snippet.publishTime);
  const iframeWidth = useBreakpointValue({
    base: "56.26%",
    lg: "37.26%",
  });
  return (
    <>
      <NavbarComp type={false} />
      <Flex gap={4} direction={{ base: "column", lg: "row" }} p={{ base: 2, md: 8 }}>
        <Flex flex={1} direction={"column"} w={"100%"} position={"relative"} pb={iframeWidth} overflow={"hidden"}>
          <iframe
            style={{ overflow: "hidden", border: "0", alignSelf: "center", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
            src={`https://www.youtube.com/embed/${singleData.id?.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Flex>
        <Flex flex={1} direction={"column"}>
          <Heading size={"lg"} textAlign={"justify"}>
            {singleData.snippet.title}
          </Heading>
          <Flex mt={5} gap={5} alignItems={"center"}>
            <Avatar name={singleData.snippet.channelTitle} src="not_avail" />
            <Flex direction={"column"}>
              <Text as={"i"} fontSize={"md"} color={"gray"} textAlign={"justify"}>
                Channel
              </Text>
              <Text fontSize={"lg"} color={"gray"} textAlign={"justify"}>
                {singleData.snippet.channelTitle}
              </Text>
            </Flex>
          </Flex>
          <Flex mt={5} direction={"column"}>
            <Text as={"i"} fontSize={"md"} color={"gray"} textAlign={"justify"}>
              Description
            </Text>
            <Text fontSize={"lg"} textAlign={"justify"}>
              {singleData.snippet.description}
            </Text>
          </Flex>
          <Flex mt={5} direction={"column"}>
            <Text as={"i"} fontSize={"md"} color={"gray"} textAlign={"justify"}>
              Date & Time
            </Text>
            <Text fontSize={"lg"} textAlign={"justify"}>
              {dateAndTime}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <CopyrightClaim />
    </>
  );
};

export default VideoViewPage;
