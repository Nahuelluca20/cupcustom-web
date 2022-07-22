import {Stack, Heading, Text, Grid, Link, Flex} from "@chakra-ui/react";
import {Image as ImageChakra} from "@chakra-ui/react";
import Image from "next/image";

import Textiles from "../assets/textiles.jpg";
import Img from "../assets/home2.png";

export default function Home() {
  return (
    <>
      <Stack
        backgroundColor="color3.50"
        className="hola"
        height={{base: "800px", lg: "600px"}}
        top="0"
      />
      <Stack
        backgroundPosition="center"
        className="bg-home"
        height={{base: "800px", lg: "600px"}}
        position="absolute"
        top="0"
        width="100%"
      />
      <Grid
        justifyContent="center"
        mt={0}
        position="absolute"
        px={10}
        textAlign="center"
        top="120px"
        width="100%"
      >
        <Heading as="h3" color="black" fontWeight="300" my={2}>
          HOLA!
        </Heading>
        <Heading as="h1" color="color1.50" fontSize="40px">
          Bienvenido/a a Cup Custom sublimaciones
        </Heading>
        <Heading as="h1" color="color1.50" fontSize="40px">
          before getting Taxed.
        </Heading>
        <Text color="white" mt={10} px={{lg: "300px"}}>
          Acá podrás encontrar los diseños más variados y te daremos la orientación necesaria para
          que puedas plasmar tu idea de diseño personalizado en el producto ideal.
        </Text>
        <Stack color="white" justifySelf="center" mt={8}>
          <Link
            backgroundColor="color1.50"
            fontSize="18px"
            fontWeight="600"
            href="/contacto"
            p={4}
            rounded="xl"
            style={{textDecoration: "none"}}
          >
            Contactar
          </Link>
        </Stack>
      </Grid>
      <Stack mt="150px" px={10} textAlign="center">
        <Heading> Nuestros Productos</Heading>
        {/* <Text px={10} py={5}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the
        </Text> */}
      </Stack>
      <Grid
        alignItems="center"
        gap={{base: "2", lg: "20"}}
        gridTemplateColumns={{lg: "repeat(2, 1fr)"}}
        my="100px"
        px={10}
      >
        <Stack
          className="img-home"
          height={{base: "300px", lg: "500px"}}
          overflowX="hidden"
          px={{base: "5", lg: "20"}}
        >
          <Image height="100%" layout="responsive" src={Img} width="100%" />
        </Stack>
        <Stack>
          <Text color="black" fontSize={{base: "15px", lg: "18px"}} lineHeight="2" px={{lg: "10"}}>
            Contamos con el asesoramiento que necesitas para así llevarte un producto de excelente
            calidad, diseño y presentación. Nuestros insumos son de primera calidad y contamos con
            las maquinas necesarias para así realizar los trabajos de manera optima y eficiente.
          </Text>
          <Stack color="white" mt={8} pl={{lg: "10"}}>
            <Link
              backgroundColor="color3.50"
              fontSize="17px"
              fontWeight="600"
              href="/productos"
              p={4}
              rounded="xl"
              style={{textDecoration: "none"}}
              textAlign="center"
              width="200px"
            >
              Ver Productos
            </Link>
          </Stack>
        </Stack>
      </Grid>

      <Flex
        backgroundColor="color3.50"
        flexDirection={{base: "column", lg: "row"}}
        justifyContent="center"
        p={10}
      >
        <Stack mx={2}>
          <Link href="/productos">
            <Text
              backgroundColor="color1.50"
              color="white"
              fontSize="18px"
              fontWeight="700"
              mt="120px"
              position="absolute"
              px={10}
              py={5}
            >
              Cerámica
            </Text>
            <ImageChakra
              height="300px"
              rounded="xl"
              src="https://impreolivo.com/wp-content/uploads/2018/08/Screenshot_21-768x419.png"
              width="500px"
            />
          </Link>
          <Link href="/productos">
            <Text
              backgroundColor="color1.50"
              color="white"
              fontSize="18px"
              fontWeight="700"
              mt="120px"
              position="absolute"
              px={10}
              py={5}
              zIndex="2"
            >
              Textiles
            </Text>
            <Stack height="300px" rounded="xl" width="100%">
              <Image
                height="100%"
                layout="responsive"
                src={Textiles}
                style={{borderRadius: "15px"}}
                width="100%"
              />
            </Stack>
            {/* <ImageChakra
              height="300px"
              rounded="xl"
              src="https://comunicacioneslatamjli.com/wp-content/uploads/2022/04/gorras-sublimadas-dia-de-las-madres.jpg"
              width="500px"
            /> */}
          </Link>
        </Stack>
        <Link href="/productos" mx={2}>
          <Text
            backgroundColor="color1.50"
            color="white"
            fontSize="18px"
            fontWeight="700"
            mt={{base: "170px", lg: "270px"}}
            position="absolute"
            px={10}
            py={5}
          >
            Polímero
          </Text>
          <ImageChakra
            height={{base: "400px", lg: "608px"}}
            mt={{base: "2", lg: "0"}}
            rounded="xl"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/401/369/products/chop1-8e15e314c87540fa8716529920480319-1024-1024.jpg"
            width={{base: "300px", lg: "550px"}}
          />
        </Link>
      </Flex>
    </>
  );
}
