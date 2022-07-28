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
      text: "Tazas",
      category: "tazas",
    },
    {
      text: "Gorras",
      category: "gorras",
    },
    {
      text: "Remeras",
      category: "remeras",
    },
    {
      text: "Buzos",
      category: "buzos",
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
