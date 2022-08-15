import {Link, Stack, Flex, Heading} from "@chakra-ui/react";

import {useProductContext} from "../context/productContext";

function Categories() {
  const {changeCategory} = useProductContext();

  const categories = [
    {
      text: "Todos",
      category: "all",
    },
    {
      text: "Polimero",
      category: "Polimero",
    },
    {
      text: "Textil",
      category: "Textil",
    },
    {
      text: "Goma",
      category: "Goma",
    },
    {
      text: "Madera",
      category: "Madera",
    },
    {
      text: "Ceramica",
      category: "Ceramica",
    },
    {
      text: "Vidrio",
      category: "Vidrio",
    },
    {
      text: "Vidrio Esmerilado",
      category: "Vidrio Esmerilado",
    },
    {
      text: "Aluminio",
      category: "Aluminio",
    },
  ];

  return (
    <Stack backgroundColor="color2.50" p={5} rounded="lg">
      <Heading color="color1.50" textTransform="uppercase">
        Categorias
      </Heading>
      <Flex direction={{lg: "column"}} flexWrap="wrap">
        {categories.map((category) => (
          <Link
            key={category.category}
            fontSize="20px"
            mr={5}
            my={{lg: "4"}}
            onClick={() => changeCategory(category.category)}
          >
            {category.text}
          </Link>
        ))}
      </Flex>
    </Stack>
  );
}

export default Categories;
