import { Flex, Image, Show, IconButton, Input, Avatar, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../Assets/A-Tube.png";
import user from "../Assets/User.jpg";
import { useAppDispatch, useAppSelector } from "../Hooks/yt_Hooks";
import { setQuery } from "../Redux/youtube.actions";
import { ButtonConfiguration, SearchInputWidth, hoverEffect } from "../Themes/DesignPatterns";

interface NavbarProp {
  type: boolean;
}

const NavbarComp = ({ type }: NavbarProp) => {
  const { query } = useAppSelector((store) => store.yt_M);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>(query);
  const setSearchQuery = () => {
    dispatch(setQuery(search));
    setSearch("");
  };

  return (
    <>
      <Show above="sm">
        <Flex justifyContent={type ? "space-around" : "space-between"} px={type ? 0 : 5} alignItems={"center"}>
          <Image w={{ base: "100px", sm: "150px", md: "200px" }} src={logo} alt="logo" />

          {type ? (
            <Flex alignItems={"center"}>
              <Input w={SearchInputWidth} value={search} onChange={(e) => setSearch(e.target.value)} variant="flushed" placeholder="Search Video" />
              <IconButton _hover={hoverEffect} onClick={() => setSearchQuery()} {...ButtonConfiguration} aria-label="Search database" icon={<FaSearch />} />
            </Flex>
          ) : null}

          <Flex gap={"2"} alignItems={"center"}>
            <Avatar name="Dan Abrahmov" src={user} />
            <Text>Sayyed Sharuk</Text>
          </Flex>
        </Flex>
      </Show>
      <Show below="sm">
        <Flex px={"2"} justifyContent={"space-between"} alignItems={"center"}>
          <Image w={{ base: "100px", sm: "150px", md: "200px" }} src={logo} alt="logo" />

          <Flex alignItems={"center"}>
            <Avatar name="SayyedSharuk" src={user} />
            <Text>Sayyed Sharuk</Text>
          </Flex>
        </Flex>
        {type ? (
          <Flex px={"1"}>
            <Flex w={"100%"} alignItems={"center"}>
              <Input w={"100%"} value={search} onChange={(e) => setSearch(e.target.value)} variant="flushed" placeholder="Search Video" />
              <IconButton {...ButtonConfiguration} onClick={() => setSearchQuery()} aria-label="Search database" icon={<FaSearch />} />
            </Flex>
          </Flex>
        ) : null}
      </Show>
    </>
  );
};

export default NavbarComp;
