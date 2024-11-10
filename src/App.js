import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar/Sidebar";
import RightSidebar from "./Components/RightSidebar/RightSidebar.jsx";
import CenterSection from "./Components/CenterSection/CenterSection.jsx";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Flex direction={["column","column","row"]} justify='space-between'>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        padding="10px"
        bg="#f7f7f7" 
      >
        <CenterSection />
      </Box>
      <RightSidebar />
      </Flex>
    </Flex>
  );
}

export default App;
