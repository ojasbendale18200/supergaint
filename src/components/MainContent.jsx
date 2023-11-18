import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Sort from "./Sort";

function MainContent() {
  return (
    <>
      <Header />
      <Box
        width={"50%"}
        marginLeft={{ base: "50px", md: "0" }}
        mt={"60px"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        zIndex={"0"}
      >
        <Cards />
        <Sort />
      </Box>
    </>
  );
}

export default MainContent;
