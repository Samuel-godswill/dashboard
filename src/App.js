import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar/Sidebar";
import RightSidebar from "./Components/RightSidebar/RightSidebar.jsx";
import CenterSection from "./Components/CenterSection/CenterSection.jsx";

function App() {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Sidebar display={{ base: "none", md: "block" }} />
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        padding="10px"
        bg="#f7f7f7"
        overflow="auto"
        width="100%"
      >
        <CenterSection />
      </Box>
      <RightSidebar display={{ base: "block", md: "block" }} />
    </Flex>
  );
}

export default App;