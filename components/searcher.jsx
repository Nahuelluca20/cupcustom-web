import {
  Stack,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
  Input,
  Image,
  Button,
} from "@chakra-ui/react";

function Searcher() {
  return (
    <Stack>
      <Flex justifyContent={{base: "space-between", lg: "start"}} mt={5}>
        <Menu>
          <MenuButton as={Button} backgroundColor="color2.50">
            Sublimaciones
          </MenuButton>
          <MenuList>
            <MenuItem>Cerámica</MenuItem>
            <MenuItem>Polímero</MenuItem>
            <MenuItem>Textiles</MenuItem>
          </MenuList>
        </Menu>

        <InputGroup ml={{lg: "20px"}} width={{base: "160px", lg: "300px"}}>
          <Input borderColor="color2.50" borderWidth="3px" placeholder="Buscar" type="text" />
          <InputRightElement
            children={
              <Image
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/000000/external-magnifying-glass-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                width="20px"
              />
            }
            zIndex="-1"
          />
        </InputGroup>
      </Flex>
    </Stack>
  );
}

export default Searcher;
