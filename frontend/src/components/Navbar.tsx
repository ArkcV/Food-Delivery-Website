
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" bg="teal.500" p={4} color="white" boxShadow="md">
      <Flex align="center">
        <Box fontWeight="bold" fontSize="lg">
          Minha Navbar
        </Box>
        <Spacer />
        <Button colorScheme="teal" variant="outline" size="sm">
          Entrar
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
