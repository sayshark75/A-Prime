import { Flex } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <Flex direction={"column"} fontFamily={"ubuntu"}>
        <AllRoutes />
      </Flex>
    </>
  );
}

export default App;
