import {Link, Stack, Flex, Heading} from "@chakra-ui/react";

function Categories() {
  return (
    <Stack backgroundColor="color2.50" p={5} rounded="lg">
      <Heading color="color1.50" textTransform="uppercase">
        Categorias
      </Heading>
      <Flex direction={{lg: "column"}} flexWrap="wrap">
        <Link fontSize="20px" mr={5} my={{lg: "4"}}>
          Tazas
        </Link>
        <Link fontSize="20px" mr={5} my={{lg: "4"}}>
          Gorras
        </Link>
        <Link fontSize="20px" mr={5} my={{lg: "4"}}>
          Remeras
        </Link>
        <Link fontSize="20px" mr={5} my={{lg: "4"}}>
          Buzos
        </Link>
      </Flex>
    </Stack>
  );
}

export default Categories;
