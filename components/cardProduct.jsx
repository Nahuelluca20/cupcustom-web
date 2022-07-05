import {Stack, Text, Button, Flex, Image, Heading} from "@chakra-ui/react";

function CardProduct() {
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
        <Image
          height="96px"
          rounded="lg"
          src="https://store-goncy.vercel.app/assets/products/01.jpg"
          width="96px"
        />
        <Stack ml={5}>
          <Heading as="h4" color="black" fontSize="20px" fontWeight="700">
            Taza disney
          </Heading>
          <Text py={2}>
            Aca va una breve descripción del producto Aca va una breve descripción del producto Aca
            va una breve descripción del producto
          </Text>
          <Flex alignContent="center" justifyContent="space-between">
            <Text>$ 500</Text>
            <Button fontSize="12px" height={6}>
              Agregar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default CardProduct;
