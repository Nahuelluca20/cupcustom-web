import {Link, Text, Grid, Image, Flex} from "@chakra-ui/react";

function Footer() {
  const linksItems = [
    {
      text: "Inicio",
      path: "/",
    },
    {
      text: "Productos",
      path: "/productos",
    },
    {
      text: "Nosotros",
      path: "/",
    },
    {
      text: "Contacto",
      path: "/",
    },
  ];

  return (
    <Grid
      backgroundColor="color3.50"
      gap={7}
      gridTemplateColumns={{lg: "repeat(3, 1fr)"}}
      // justifyContent="center"
      mt={20}
      py={10}
      textAlign="center"
    >
      <Link color="white" href="/" style={{textDecoration: "none"}}>
        <Text fontSize="17px" fontWeight="600">
          Cupcustom
        </Text>
        <Text fontSize="17px" fontWeight="600">
          sublimaciones
        </Text>
      </Link>
      <Grid gap={5} gridTemplateColumns={{lg: "repeat(2, 1fr)"}}>
        {linksItems.map((item) => (
          <Link
            key={item.text}
            color="white"
            fontSize="16px"
            fontWeight="400"
            href={item.path}
            style={{textDecoration: "none"}}
          >
            {item.text}
          </Link>
        ))}
      </Grid>
      <Flex justifyContent="center">
        <Link mx={3}>
          <Image
            backgroundColor="color1.50"
            p={2}
            rounded="100%"
            src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"
            width="45px"
          />
        </Link>
        <Link mx={3}>
          <Image
            backgroundColor="color1.50"
            p={2}
            rounded="100%"
            src="https://img.icons8.com/ios/50/ffffff/facebook-new.png"
            width="45px"
          />
        </Link>
      </Flex>
    </Grid>
  );
}

export default Footer;
