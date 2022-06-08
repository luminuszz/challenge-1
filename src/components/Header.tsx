import logoIcon from "@assets/logo.svg";
import { Flex, Image } from "@chakra-ui/react";

const Header = () => (
  <Flex as="header" h="200px" bgColor="gray.700" alignItems="center" justify="center">
    <Image h="128px" w="128px" src={logoIcon} alt="logo" />
  </Flex>
);

export default Header;
