import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Link,
  Image,
} from "@chakra-ui/react";

function Contacto() {
  return (
    <Flex display={{lg: "flex"}} mt="150px" px={10}>
      <FormControl backgroundColor="color2.50" p={10} width={{base: "100%", lg: "500px"}}>
        <FormLabel htmlFor="email" mb={0}>
          Name
        </FormLabel>
        <Input isInvalid errorBorderColor="color1.50" id="email" type="email" variant="flushed" />

        <FormLabel htmlFor="email" mb={0} mt={10}>
          Email
        </FormLabel>
        <Input isInvalid errorBorderColor="color1.50" id="text" type="text" variant="flushed" />

        <FormLabel htmlFor="text" mb={0} mt={10}>
          Mensaje
        </FormLabel>
        <Input isInvalid errorBorderColor="color1.50" id="text" type="text" variant="flushed" />
        <Button
          _hover={{backgroundColor: "color3.50"}}
          backgroundColor="color1.50"
          color="white"
          mt={10}
        >
          Enviar
        </Button>
      </FormControl>
      <Stack alignSelf="center" ml={{lg: "200px"}} mt={{base: "10", lg: "0"}}>
        <Link alignItems="center" display="flex" href="mailto:cupcustom22@gmail.com" py={3}>
          <Image src="https://img.icons8.com/ios-glyphs/90/004a70/gmail.png" width="35px" />
          <Text ml={3}>cupcustom22@gmail.com</Text>
        </Link>
        <Link
          isExternal
          alignItems="center"
          display="flex"
          href="https://wa.me/542617763315?text=Hola"
          py={3}
        >
          <Image
            src="https://img.icons8.com/material-outlined/96/004a70/whatsapp--v1.png"
            width="35px"
          />
          <Text ml={3}>+54 261 776-3315</Text>
        </Link>
        <Link
          isExternal
          alignItems="center"
          display="flex"
          href="https://www.instagram.com/cup_custom/"
          py={3}
        >
          <Image src="https://img.icons8.com/ios/50/004a70/instagram-new--v1.png" width="35px" />
          <Text ml={3}>Cup_Custom</Text>
        </Link>
        <Link alignItems="center" display="flex" py={3}>
          <Image src="https://img.icons8.com/ios/100/004a70/map-marker--v1.png" width="35px" />
          <Text ml={3}>Alvarez Condarco 1650. San Jose de Guaymallen</Text>
        </Link>
      </Stack>
    </Flex>
  );
}

export default Contacto;
