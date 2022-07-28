import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  useDisclosure,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import {useRef, useState, useMemo} from "react";

import {useProductContext} from "../context/productContext";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();
  const {product} = useProductContext();

  const text = useMemo(() => {
    return cart
      .reduce((message, product) => message.concat(`* ${product.title} - ${product.price}\n`), "")
      .concat(`\nTotal: $${cart.reduce((total, product) => total + product.price, 0)}`);
  }, [cart]);

  const finalizeOrder = () => {
    setCart((cart) => cart.concat(product));
  };

  return (
    <>
      <Image
        ref={btnRef}
        cursor="pointer"
        src="https://img.icons8.com/ios-glyphs/90/ffffff/shopping-cart--v1.png"
        width="30px"
        onClick={onOpen}
      />
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>

          <DrawerBody>
            <Text fontSize="18px" fontWeight="600">
              Mis Productos: {product.length}
            </Text>
            {product.map((item) => (
              <Stack key={Math.random()} my={5}>
                <Text fontSize="15px">{item.title}</Text>
                <Text color="green" fontSize="13px">
                  $ {item.price}
                </Text>
              </Stack>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} variant="outline" onClick={onClose}>
              Cerrar
            </Button>
            <Button
              isExternal
              as={Link}
              colorScheme="whatsapp"
              href={`https://wa.me/542617763315?text=${encodeURIComponent(text)}`}
              padding={4}
              width="fill-content"
              onClick={() => finalizeOrder()}
            >
              Completar pedido
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShoppingCart;
