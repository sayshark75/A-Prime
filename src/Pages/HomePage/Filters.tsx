import { Flex, IconButton, Select } from "@chakra-ui/react";
import { ButtonConfiguration, hoverEffect } from "../../Themes/DesignPatterns";
import { BiReset } from "react-icons/bi";
import { useAppDispatch } from "../../Hooks/yt_Hooks";
import { setOrder, setPgToken, setQuery } from "../../Redux/youtube.actions";

const Filter = () => {
  const dispatch = useAppDispatch();
  const setInputOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrder(e.target.value));
  };
  const resetForms = () => {
    dispatch(setOrder("relevance"));
    dispatch(setPgToken(""));
    dispatch(setQuery(""));
  };
  return (
    <>
      <form>
        <Flex p={"1"} w={"100%"} justifyContent={"center"} alignItems={"center"} gap={"2"}>
          <Select onChange={(e) => setInputOrder(e)} variant="flushed" placeholder="Select Order of Videos">
            <option value="relevance">Relevance (Default)</option>
            <option value="rating">Rating</option>
            <option value="viewCount">View Count</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
          </Select>
          <IconButton
            type="reset"
            onClick={() => resetForms()}
            _hover={hoverEffect}
            {...ButtonConfiguration}
            icon={<BiReset style={{ fontSize: "26px" }} />}
            aria-label={"ResetFilter"}
          />
        </Flex>
      </form>
    </>
  );
};

export default Filter;
