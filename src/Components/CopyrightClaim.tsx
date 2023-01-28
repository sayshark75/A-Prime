import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import logoImg from "../Assets/A-Tube.png";

type Props = {};

const CopyrightClaim = (props: Props) => {
  return (
    <>
      <Divider pt={4} />
      <Flex p={5} justifyContent={"space-between"} direction={{ base: "column", sm: "row" }}>
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Image src={logoImg} w={"100px"} alt="logo" />
          <Flex gap={3} justifyContent={"center"} alignItems={"center"} direction={{ base: "row", sm: "column" }}>
            <Text fontSize={{ base: "xs", sm: "md" }}>All Right Reserved APrime</Text>
            <Text fontSize={{ base: "xs", sm: "md" }}>Created By Sayyed Sharuk</Text>
          </Flex>
        </Flex>
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Image src={"https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"} w={"100px"} />
          <Text fontSize={{ base: "xs", sm: "md" }}>Supported by YouTube</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default CopyrightClaim;
