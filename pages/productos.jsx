import {Stack, Heading, Grid, Flex} from "@chakra-ui/react";

import Searcher from "../components/searcher";
import CardProduct from "../components/cardProduct";
import Categories from "../components/categories";

function Productos() {
  return (
    <Stack mt="120px" px={5}>
      <Heading as="h1" color="color1.50">
        Productos
      </Heading>
      <Searcher />
      <Flex display={{base: "grid", lg: "flex"}} justifyContent="space-between" py={10}>
        <Stack minW={{lg: "350px"}} mr={{lg: "20"}}>
          <Categories />
        </Stack>
        <Grid gap={8} gridTemplateColumns={{lg: "repeat(2, 1fr)"}}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Grid>
      </Flex>
    </Stack>
  );
}

export default Productos;
