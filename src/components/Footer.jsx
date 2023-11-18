import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      bg={"#FFB653"}
      height={"222px"}
      zIndex={"999"}
      marginLeft={{ base: "40px", md: "0px" }}
      borderRadius="10px"
      background="var(--main-color-yellow-orange, #FEAD3A)"
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Text
        color="#000"
        textAlign="left"
        fontFamily="Inter"
        fontSize="20px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="normal"
        pt={"20px"}
        pl={"40px"}
      >
        start your own{" "}
        <Text
          as="span"
          color="#000"
          fontFamily="Inter"
          fontSize="20px"
          fontStyle="normal"
          fontWeight="800"
          lineHeight="normal"
        >
          {" "}
          battle
        </Text>
      </Text>
      <Box
        display={"flex"}
        width={"70%"}
        margin={"auto"}
        justifyContent={"space-between"}
        marginTop={"50px"}
        flexDirection={{ base: "column", md: "row" }}
        gap={"10px"}
      >
        <Box
          display="inline-flex"
          height="56px"
          padding="10px"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          flexShrink={0}
          borderRadius="10px"
          background="#FFF"
          boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.25)"
        >
          <Box
            display="flex"
            width="220px"
            padding="0px 8px"
            alignItems="center"
            gap="4px"
          >
            <Text
              color="#0F002B"
              textAlign="center"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
            >
              ₹
            </Text>
            <Text
              color="rgba(0, 0, 0, 0.57)"
              textAlign="center"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
            >
              Your battle amount
            </Text>
          </Box>
          <Box
            display="flex"
            width="40px"
            height="40px"
            padding="6px"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
            background="#FFB653"
            boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.40)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M14.105 24.7916C16.73 22.6625 20.7317 20.6441 20.7317 12.04V6.67331C18.3983 6.67331 16.3625 5.57664 14.0817 4.64331C11.9292 5.53581 9.64249 6.68498 7.16916 6.66164V12.0691C7.26249 20.2708 11.0833 22.75 14.105 24.7916Z"
                stroke="#0F002B"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.425 19.0983C21.6767 20.8483 22.8842 22.8608 24.0917 24.7683C21.9792 23.7782 20.0914 22.3668 18.5442 20.6208M8.49333 18.9058C6.195 20.8891 4.5675 22.7558 3.78 24.64C5.74 23.4733 7.47833 22.5166 9.28083 20.3641M3.92583 3.40082L7.1925 6.66165M8.54 4.47415L6.6325 6.10165L5.005 8.00915M24.0158 3.40665L20.755 6.67332M22.9425 8.02082L21.315 6.11332L19.4075 4.47998M14.105 8.32998C12.7895 8.79557 11.4345 9.14115 10.0567 9.36248C9.7825 14.1866 11.4975 17.5291 14.105 20.09C16.7592 17.5 17.9375 14 17.8967 9.54915C16.586 9.30608 15.3117 8.89637 14.105 8.32998Z"
                stroke="#0F002B"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
        </Box>

        <Box
          display="inline-flex"
          height="52.8px"
          padding="0px 21.12px"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          flexShrink={0}
          borderRadius="13.2px"
          background="#FFF"
          boxShadow="0px 0px 2.64px 0px rgba(0, 0, 0, 0.25)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clip-path="url(#clip0_1_235)">
              <path
                d="M1.27408 17.8882C1.27325 20.8624 2.05041 23.7666 3.52815 26.3264L1.13275 35.0724L10.0832 32.7256C12.5588 34.0732 15.3325 34.7794 18.1511 34.7796H18.1585C27.4634 34.7796 35.0377 27.208 35.0417 17.9015C35.0435 13.3918 33.2889 9.15122 30.1009 5.96083C26.9136 2.77071 22.6745 1.01292 18.1578 1.01086C8.85188 1.01086 1.27806 8.58207 1.27421 17.8882"
                fill="url(#paint0_linear_1_235)"
              />
              <path
                d="M0.670129 17.8827C0.669169 20.964 1.47418 23.972 3.00461 26.6235L0.523315 35.683L9.79469 33.252C12.3492 34.6449 15.2254 35.3792 18.1521 35.3803H18.1597C27.7983 35.3803 35.6448 27.5363 35.6489 17.8967C35.6505 13.225 33.8328 8.83195 30.531 5.52726C27.2288 2.22299 22.8381 0.401945 18.1597 0.400024C8.51932 0.400024 0.673971 8.24291 0.670129 17.8827ZM6.19143 26.1668L5.84525 25.6173C4.39001 23.3034 3.62191 20.6295 3.62301 17.8838C3.62617 9.87145 10.1469 3.35277 18.1651 3.35277C22.0482 3.35442 25.6974 4.86811 28.4421 7.61449C31.1867 10.3611 32.697 14.0123 32.696 17.8956C32.6925 25.9079 26.1716 32.4274 18.1597 32.4274H18.1539C15.5451 32.426 12.9866 31.7255 10.7553 30.4015L10.2243 30.0866L4.72247 31.5291L6.19143 26.1667V26.1668Z"
                fill="url(#paint1_linear_1_235)"
              />
              <path
                d="M13.7896 10.5738C13.4622 9.8462 13.1177 9.83152 12.8064 9.81876C12.5514 9.80778 12.26 9.80861 11.9688 9.80861C11.6774 9.80861 11.2039 9.91824 10.8037 10.3552C10.403 10.7927 9.27405 11.8497 9.27405 13.9997C9.27405 16.1497 10.84 18.2275 11.0583 18.5193C11.2769 18.8106 14.0815 23.3638 18.5232 25.1154C22.2147 26.5711 22.9659 26.2815 23.7671 26.2086C24.5684 26.1358 26.3526 25.1518 26.7166 24.1313C27.0809 23.1111 27.0809 22.2365 26.9717 22.0537C26.8625 21.8716 26.5711 21.7623 26.1341 21.5438C25.6969 21.3253 23.5485 20.2681 23.148 20.1222C22.7473 19.9765 22.456 19.9038 22.1646 20.3413C21.8732 20.7782 21.0363 21.7623 20.7812 22.0537C20.5264 22.3458 20.2714 22.3822 19.8345 22.1636C19.3972 21.9444 17.9899 21.4835 16.3202 19.9949C15.0211 18.8366 14.144 17.4062 13.8891 16.9686C13.6341 16.5317 13.8618 16.2949 14.0809 16.0772C14.2772 15.8814 14.5181 15.5669 14.7368 15.3118C14.9547 15.0566 15.0274 14.8745 15.1731 14.5831C15.3189 14.2914 15.2459 14.0362 15.1369 13.8176C15.0274 13.599 14.1782 11.4378 13.7896 10.5738Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_235"
                x1="1696.58"
                y1="3407.16"
                x2="1696.58"
                y2="1.01086"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1FAF38" />
                <stop offset="1" stop-color="#60D669" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_235"
                x1="1756.8"
                y1="3528.7"
                x2="1756.8"
                y2="0.400024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9F9F9" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <clipPath id="clip0_1_235">
                <rect
                  width="35.1345"
                  height="35.4"
                  fill="white"
                  transform="translate(0.52002 0.400024)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <g clip-path="url(#clip0_1_240)">
              <path
                d="M32.52 16.2C32.52 7.25304 25.267 0 16.32 0C7.37304 0 0.119995 7.25292 0.119995 16.2C0.119995 24.2858 6.04413 30.9879 13.7887 32.2032V20.8828H9.67546V16.2H13.7887V12.6309C13.7887 8.57081 16.2074 6.32813 19.9077 6.32813C21.6802 6.32813 23.5341 6.64453 23.5341 6.64453V10.6313H21.4913C19.4787 10.6313 18.8512 11.88 18.8512 13.1612V16.2H23.3442L22.626 20.8828H18.8512V32.2032C26.5959 30.9879 32.52 24.286 32.52 16.2Z"
                fill="#1877F2"
              />
              <path
                d="M22.626 20.8828L23.3442 16.2H18.8513V13.1612C18.8513 11.8799 19.4789 10.6313 21.4914 10.6313H23.5341V6.64453C23.5341 6.64453 21.6802 6.32812 19.9077 6.32812C16.2074 6.32812 13.7888 8.57081 13.7888 12.6309V16.2H9.67548V20.8828H13.7888V32.2032C14.6261 32.3344 15.4724 32.4002 16.32 32.4C17.1676 32.4003 18.0139 32.3345 18.8513 32.2032V20.8828H22.626Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_240">
                <rect
                  width="32.4"
                  height="32.4"
                  fill="white"
                  transform="translate(0.119995)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M20.1455 2.47498H23.7843L15.8346 11.561L25.1868 23.925H17.863L12.1276 16.4263L5.56498 23.925H1.92398L10.427 14.2065L1.45648 2.47498H8.96398L14.1483 9.32908L20.1433 2.47498H20.1455ZM18.8684 21.747H20.8847L7.86948 4.53858H5.70578L18.8684 21.747Z"
              fill="#292929"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
          >
            <path
              d="M6.63995 12.9C6.63995 9.78919 6.63995 8.23269 7.60685 7.26689C8.57265 6.29999 10.1292 6.29999 13.24 6.29999H16.54C19.6508 6.29999 21.2073 6.29999 22.1731 7.26689C23.14 8.23269 23.14 9.78919 23.14 12.9V18.4C23.14 21.5108 23.14 23.0673 22.1731 24.0331C21.2073 25 19.6508 25 16.54 25H13.24C10.1292 25 8.57265 25 7.60685 24.0331C6.63995 23.0673 6.63995 21.5108 6.63995 18.4V12.9Z"
              stroke="black"
              stroke-width="1.65"
            />
            <path
              d="M6.63997 21.7C5.76475 21.7 4.92538 21.3523 4.30651 20.7335C3.68764 20.1146 3.33997 19.2752 3.33997 18.4V11.8C3.33997 7.6519 3.33997 5.5773 4.62917 4.2892C5.91727 3 7.99187 3 12.14 3H16.54C17.4152 3 18.2545 3.34768 18.8734 3.96655C19.4923 4.58542 19.84 5.42479 19.84 6.3"
              stroke="black"
              stroke-width="1.65"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M28.05 16.5726L18.733 7.25555V12.5796C9.41598 13.9106 5.42298 20.5656 4.09198 27.2206C7.41948 22.5621 12.078 20.4325 18.733 20.4325V25.8896L28.05 16.5726Z"
              fill="black"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
