import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

function Cards() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      display="inline-flex"
      height="460px"
      //   padding="16px 16px"
      px={{ base: "16px", md: "76px" }}
      py={"16px"}
      flexDirection="column"
      alignItems="flex-start"
      gap="10px"
      flexShrink={0}
      borderRadius={isSmallScreen ? "10px" : "initial"}
      background={
        isSmallScreen ? "var(--universal-color-white, #FFF)" : "initial"
      }
      boxShadow={
        isSmallScreen ? "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" : "initial"
      }
      w={isSmallScreen ? "300px" : "initial"}
    >
      <Box
        display="flex"
        padding="4px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        border="1px solid rgba(15, 0, 43, 0.20)"
        background="#FFF"
        boxShadow="0px 0px 3px 0px rgba(0, 0, 0, 0.25)"
      >
        <Box
          display="flex"
          padding="13px 15px"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="4px"
          alignSelf="stretch"
          borderRadius="10px 10px 0px 0px"
        >
          <Text
            color="#0F002B"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            lineHeight="normal"
          >
            open challenge from{" "}
            <Text
              as="span"
              color="#0F002B"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="800"
              lineHeight="normal"
            >
              ravan3p
            </Text>
          </Text>
          <Text
            color="#0F002B"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            lineHeight="normal"
          >
            · 2 minutes ago
          </Text>
        </Box>
        <Box
          display="flex"
          padding="15px 32px 16px 16px"
          alignItems="center"
          gap="64px"
          borderRadius="0px 0px 10px 10px"
          background="#FCA837"
          boxShadow="inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="4px"
            color={"#FFFFFF"}
          >
            <Box display={"flex"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="4px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Entry fee
                </Text>
              </Box>
              <Box
                display="flex"
                padding="5px 6px"
                alignItems="flex-start"
                gap="46px"
                flex="1 0 0"
                alignSelf="stretch"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="normal"
                >
                  ₹40
                </Text>
              </Box>
            </Box>

            <Box display={"flex"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="4px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Entry fee
                </Text>
              </Box>
              <Box
                display="flex"
                padding="5px 6px"
                alignItems="flex-start"
                gap="46px"
                flex="1 0 0"
                alignSelf="stretch"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="normal"
                >
                  ₹80
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            width="42px"
            height="42px"
            padding="11px"
            justifyContent="center"
            alignItems="center"
            borderRadius="32px"
            background="#0F002B"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.075 17.7083C11.95 16.1875 14.8083 14.7458 14.8083 8.6V4.76667C13.1417 4.76667 11.6875 3.98333 10.0583 3.31667C8.52082 3.95417 6.88749 4.775 5.12082 4.75833V8.62083C5.18749 14.4792 7.91665 16.25 10.075 17.7083Z"
                stroke="white"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.875 13.6417C15.4833 14.8917 16.3458 16.3292 17.2083 17.6917C15.6995 16.9845 14.351 15.9763 13.2458 14.7292M6.06668 13.5042C4.42501 14.9208 3.26251 16.2542 2.70001 17.6C4.10001 16.7667 5.34168 16.0833 6.62918 14.5458M2.80418 2.42917L5.13751 4.75834M6.10001 3.19584L4.73751 4.35834L3.57501 5.72084M17.1542 2.43334L14.825 4.76667M16.3875 5.72917L15.225 4.36667L13.8625 3.2M10.075 5.95C9.13535 6.28257 8.16751 6.52941 7.18335 6.6875C6.98751 10.1333 8.21251 12.5208 10.075 14.35C11.9708 12.5 12.8125 10 12.7833 6.82084C11.8471 6.64721 10.937 6.35456 10.075 5.95Z"
                stroke="white"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        padding="4px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        border="1px solid rgba(15, 0, 43, 0.20)"
        background="#FFF"
        boxShadow="0px 0px 3px 0px rgba(0, 0, 0, 0.25)"
      >
        <Box
          display="flex"
          padding="13px 15px"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="4px"
          alignSelf="stretch"
          borderRadius="10px 10px 0px 0px"
        >
          <Text
            color="#0F002B"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            lineHeight="normal"
          >
            open challenge from{" "}
            <Text
              as="span"
              color="#0F002B"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="800"
              lineHeight="normal"
            >
              ravan3p
            </Text>
          </Text>
          <Text
            color="#0F002B"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            lineHeight="normal"
          >
            · 2 minutes ago
          </Text>
        </Box>
        <Box
          display="flex"
          padding="15px 32px 16px 16px"
          alignItems="center"
          gap="64px"
          borderRadius="0px 0px 10px 10px"
          background="#FCA837"
          boxShadow="inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="4px"
            color={"#FFFFFF"}
          >
            <Box display={"flex"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="4px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Entry fee
                </Text>
              </Box>
              <Box
                display="flex"
                padding="5px 6px"
                alignItems="flex-start"
                gap="46px"
                flex="1 0 0"
                alignSelf="stretch"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="normal"
                >
                  ₹40
                </Text>
              </Box>
            </Box>

            <Box display={"flex"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="4px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Entry fee
                </Text>
              </Box>
              <Box
                display="flex"
                padding="5px 6px"
                alignItems="flex-start"
                gap="46px"
                flex="1 0 0"
                alignSelf="stretch"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="normal"
                >
                  ₹80
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            width="42px"
            height="42px"
            padding="11px"
            justifyContent="center"
            alignItems="center"
            borderRadius="32px"
            background="#0F002B"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.075 17.7083C11.95 16.1875 14.8083 14.7458 14.8083 8.6V4.76667C13.1417 4.76667 11.6875 3.98333 10.0583 3.31667C8.52082 3.95417 6.88749 4.775 5.12082 4.75833V8.62083C5.18749 14.4792 7.91665 16.25 10.075 17.7083Z"
                stroke="white"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.875 13.6417C15.4833 14.8917 16.3458 16.3292 17.2083 17.6917C15.6995 16.9845 14.351 15.9763 13.2458 14.7292M6.06668 13.5042C4.42501 14.9208 3.26251 16.2542 2.70001 17.6C4.10001 16.7667 5.34168 16.0833 6.62918 14.5458M2.80418 2.42917L5.13751 4.75834M6.10001 3.19584L4.73751 4.35834L3.57501 5.72084M17.1542 2.43334L14.825 4.76667M16.3875 5.72917L15.225 4.36667L13.8625 3.2M10.075 5.95C9.13535 6.28257 8.16751 6.52941 7.18335 6.6875C6.98751 10.1333 8.21251 12.5208 10.075 14.35C11.9708 12.5 12.8125 10 12.7833 6.82084C11.8471 6.64721 10.937 6.35456 10.075 5.95Z"
                stroke="white"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        padding="4px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        border="1px solid rgba(15, 0, 43, 0.20)"
        background="#FFF"
        boxShadow="0px 0px 3px 0px rgba(0, 0, 0, 0.25)"
      >
        <Box
          display="flex"
          padding="13px 15px"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="4px"
          alignSelf="stretch"
          borderRadius="10px 10px 0px 0px"
        >
          <Text
            color="#0F002B"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            lineHeight="normal"
          >
            open challenge from{" "}
            <Text
              as="span"
              color="#0F002B"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="800"
              lineHeight="normal"
            >
              ravan3p
            </Text>
          </Text>
          <Text
            color="#0F002B"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            lineHeight="normal"
          >
            · 2 minutes ago
          </Text>
        </Box>
        <Box
          display="flex"
          padding="15px 32px 16px 16px"
          alignItems="center"
          gap="64px"
          borderRadius="0px 0px 10px 10px"
          background="#FCA837"
          boxShadow="inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="4px"
            color={"#FFFFFF"}
          >
            <Box display={"flex"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="4px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Entry fee
                </Text>
              </Box>
              <Box
                display="flex"
                padding="5px 6px"
                alignItems="flex-start"
                gap="46px"
                flex="1 0 0"
                alignSelf="stretch"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="normal"
                >
                  ₹40
                </Text>
              </Box>
            </Box>

            <Box display={"flex"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="4px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Entry fee
                </Text>
              </Box>
              <Box
                display="flex"
                padding="5px 6px"
                alignItems="flex-start"
                gap="46px"
                flex="1 0 0"
                alignSelf="stretch"
              >
                <Text
                  color="#FFF"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="normal"
                >
                  ₹80
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            width="42px"
            height="42px"
            padding="11px"
            justifyContent="center"
            alignItems="center"
            borderRadius="32px"
            background="#0F002B"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.075 17.7083C11.95 16.1875 14.8083 14.7458 14.8083 8.6V4.76667C13.1417 4.76667 11.6875 3.98333 10.0583 3.31667C8.52082 3.95417 6.88749 4.775 5.12082 4.75833V8.62083C5.18749 14.4792 7.91665 16.25 10.075 17.7083Z"
                stroke="white"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.875 13.6417C15.4833 14.8917 16.3458 16.3292 17.2083 17.6917C15.6995 16.9845 14.351 15.9763 13.2458 14.7292M6.06668 13.5042C4.42501 14.9208 3.26251 16.2542 2.70001 17.6C4.10001 16.7667 5.34168 16.0833 6.62918 14.5458M2.80418 2.42917L5.13751 4.75834M6.10001 3.19584L4.73751 4.35834L3.57501 5.72084M17.1542 2.43334L14.825 4.76667M16.3875 5.72917L15.225 4.36667L13.8625 3.2M10.075 5.95C9.13535 6.28257 8.16751 6.52941 7.18335 6.6875C6.98751 10.1333 8.21251 12.5208 10.075 14.35C11.9708 12.5 12.8125 10 12.7833 6.82084C11.8471 6.64721 10.937 6.35456 10.075 5.95Z"
                stroke="white"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cards;
