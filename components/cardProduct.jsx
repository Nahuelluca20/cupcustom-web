import {Stack, Text, Flex, Image, Heading, Button} from "@chakra-ui/react";

import {useProductContext} from "../context/productContext";

function CardProduct({title, description, price, img, productAdd}) {
  const {addProduct} = useProductContext();

  return (
    <Stack
      backgroundColor="white"
      border="1px"
      borderColor="color2.50"
      boxShadow="2xl"
      px={3}
      py={5}
      rounded="lg"
    >
      <Flex justifyContent="space-between">
        <Image height="96px" rounded="lg" src={img} width="96px" />
        <Stack ml={5}>
          <Heading as="h4" color="black" fontSize="20px" fontWeight="700">
            {title}
          </Heading>
          <Text py={2}>{description}</Text>
          <Flex alignContent="center" justifyContent="space-between">
            <Text>$ {price}</Text>
            <Button fontSize="12px" height={6} onClick={() => addProduct(productAdd)}>
              Agregar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default CardProduct;
