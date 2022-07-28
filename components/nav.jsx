import {Link, Flex} from "@chakra-ui/react";
import {Image as ImageChakra} from "@chakra-ui/react";
import {useState} from "react";
import Image from "next/image";

import Logo from "../assets/logoCup.png";

import ShoppingCart from "./shoppingCart";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const [transform, setTransform] = useState("translateX(100%)");

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (transform === "translateX(100%)") {
      setTransform("translateX(0%)");
    } else {
      setTransform("translateX(100%)");
    }
  };

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
      text: "Contacto",
      path: "/contacto",
    },
  ];

  return (
    <Flex
      alignItems="center"
      backgroundColor="color3.50"
      color="white"
      justifyContent="space-between"
      position="fixed"
      px={{base: "5", lg: "20"}}
      py={3}
      top="0"
      width="100%"
      zIndex="5"
    >
      <Flex>
        <Link color="white" href="/" style={{textDecoration: "none"}} zIndex="5">
          <Image height="50px" src={Logo} width="120px" />
        </Link>
      </Flex>
      <Flex
        backgroundColor="color3.50"
        display={{base: "grid", md: "grid", lg: "flex"}}
        gap={10}
        justifyItems="start"
        pl={{base: "50px", lg: "0"}}
        position={{base: "fixed", lg: "static"}}
        pr={{base: "130px", lg: "0"}}
        py={{base: "200px", lg: "0"}}
        right="0"
        top="0"
        transform={{base: `${transform}`, lg: "translateX(0%)"}}
        transition="transform 350ms ease-out"
        zIndex={{base: "1", lg: "1"}}
      >
        {linksItems.map((item) => (
          <Link
            key={item.text}
            _hover={{color: "color1.50"}}
            color="white"
            fontSize="18px"
            fontWeight={{base: "700", lg: "500"}}
            href={item.path}
            py={{base: "5", lg: "3"}}
            style={{textDecoration: "none"}}
          >
            {item.text}
          </Link>
        ))}
      </Flex>
      <ShoppingCart />
      {menuActive ? (
        <ImageChakra
          display={{lg: "none"}}
          ml={10}
          src="https://img.icons8.com/ios-filled/100/ffffff/multiply.png"
          width="40px"
          zIndex="5"
          onClick={toggleMenu}
        />
      ) : (
        <ImageChakra
          display={{lg: "none"}}
          ml={10}
          src="https://img.icons8.com/ios-filled/100/ffffff/menu--v1.png"
          width="40px"
          zIndex="5"
          onClick={toggleMenu}
        />
      )}
    </Flex>
  );
}

export default Nav;
