import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box
      justifyContent="space-between"
      display={{ base: "none", lg: "flex" }}
      width={"70%"}
      marginLeft={"30px"}
      mt={"20px"}
    >
      <Text
        color="#FFF"
        textAlign="center"
        fontFamily="Inter"
        fontSize="20px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="normal"
      >
        live open{" "}
        <Text
          as="span"
          color="#FFF"
          textAlign="center"
          fontFamily="Inter"
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
        >
          challenge
        </Text>
      </Text>
      <Text
        color="#FFF"
        textAlign="center"
        fontFamily="Inter"
        fontSize="20px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="normal"
      >
        Sort{" "}
        <Text
          as="span"
          color="#FFF"
          textAlign="center"
          fontFamily="Inter"
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
        >
          battle
        </Text>
      </Text>
    </Box>
  );
}

export default Header;
