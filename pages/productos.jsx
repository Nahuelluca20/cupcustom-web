import {Stack, Heading, Grid, Flex} from "@chakra-ui/react";

import Searcher from "../components/searcher";
import CardProduct from "../components/cardProduct";
import Categories from "../components/categories";
import api from "../product/api";
import {useProductContext} from "../context/productContext";

function Productos({products}) {
  const {category, inputText} = useProductContext();

  const filteredData = products.filter((product) => {
    //if no input the return the original
    if (inputText === "") {
      return product;
    }
    //return the item which contains the user input
    else {
      return product.title.toLowerCase().includes(inputText);
    }
  });

  const showSearch = () => {
    return filteredData.map((product) => (
      <CardProduct
        key={product.id}
        description={product.description}
        img={product.image}
        price={product.price}
        productAdd={product}
        title={product.title}
      />
    ));
  };

  const showCategory = () => {
    if (category === "all") {
      return products.map((product) => (
        <CardProduct
          key={product.id}
          description={product.description}
          img={product.image}
          price={product.price}
          productAdd={product}
          title={product.title}
        />
      ));
    } else {
      return products
        .filter((product) => product.category === category)
        .map((product) => (
          <CardProduct
            key={product.id}
            description={product.description}
            img={product.image}
            price={product.price}
            productAdd={product}
            title={product.title}
          />
        ));
    }
  };

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
          {inputText === "" ? showCategory() : showSearch()}
        </Grid>
      </Flex>
    </Stack>
  );
}

export default Productos;

export async function getStaticProps() {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
}
