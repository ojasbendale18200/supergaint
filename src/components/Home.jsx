import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box, Heading } from "@chakra-ui/react";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Home() {
  return (
    <Box position={"relative"}>
      <Sidebar />
      <Box
        margin={"auto"}
        marginLeft={{ base: "0px", md: "240px" }}
        position={"absolute"}
        top={"20"}
        bg={"#0F002B"}
        width={{ base: "100%", md: "85%" }}
        height={"615px"}
      >
        <MainContent />
      </Box>
      <Box
        marginLeft={{ base: "0px", md: "240px" }}
        position={"absolute"}
        bottom={"-150px"}
        width={"90%"}
        margin={"auto"}
        height={"222px"}
        
      >
        {" "}
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
