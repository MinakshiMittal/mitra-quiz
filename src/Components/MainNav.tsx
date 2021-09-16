import { Flex, Spacer, Heading, Image } from "@chakra-ui/react";
import "./MainNav.css";
import "../global.d.ts";

export const MainNav = () => {
  return (
    <>
      <Flex className="main-nav" zIndex="1">
        <Image
          src="https://cdn.pixabay.com/photo/2018/04/03/00/48/fingers-3285615_1280.png"
          alt="logo"
          className="hero-image"
        />
        <Heading size="lg" className="hero-name" fontFamily="Varela Round">
          Mitra Quiz
        </Heading>
        <Spacer />
      </Flex>
    </>
  );
};
