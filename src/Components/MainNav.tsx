import { Flex, Spacer, Heading, Button, Image } from "@chakra-ui/react";
import "./MainNav.css";
import "../global.d.ts";
import BlackLogo from "../assets/bnw-logo.png";

export const MainNav = () => {
  return (
    <>
      <Flex className="main-nav">
        <Image src={BlackLogo} alt="logo" className="hero-image" />
        <Heading size="md" className="hero-name">
          Mitra
        </Heading>
        <Spacer />
        <Button colorScheme="red" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="red">Log in</Button>
      </Flex>
    </>
  );
};
