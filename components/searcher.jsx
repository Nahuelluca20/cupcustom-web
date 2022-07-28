import {Stack, Flex, InputGroup, InputRightElement, Input, Image} from "@chakra-ui/react";

import {useProductContext} from "../context/productContext";

function Searcher() {
  const {inputHandler} = useProductContext();

  return (
    <Stack>
      <Flex justifyContent={{base: "space-between", lg: "start"}} mt={5}>
        <InputGroup width={{base: "160px", lg: "300px"}}>
          <Input
            borderColor="color2.50"
            borderWidth="3px"
            placeholder="Buscar"
            type="text"
            onChange={inputHandler}
          />
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
