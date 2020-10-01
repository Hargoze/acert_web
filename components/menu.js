import React from "react";
import { Box, Heading, Flex, Text, Button, Image, Stack, IconButton, PseudoBox} from "@chakra-ui/core";
import { Caps } from '../components/caps'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/core";

const LayoutItems = ({icon, text1, text2}) => {
  const Icon_color="secondary"
  return (
      <PseudoBox isInline maxW="xl" _hover={{bg: "gray.200", Icon_color:"primary"}}>
          <IconButton icon={icon} variantColor={Icon_color} color="white" _hover={{variantColor:"primary"}}/>
          <Box>
          <Text fontWeight="semibold" fontSize="l" color="primary.400">{text1}</Text>
          <Text >{text2}</Text>
          </Box>
      </PseudoBox>
  )
}
// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const My_Menu = () => {
  return (
      <Menu>
      <MenuButton 
        as={Button} 
        rightIcon="chevron-down" 
        mr="6" 
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _expanded={{ bg: "transparent" }}
      >
        Actions
      </MenuButton>
      <MenuList maxWidth="5">
      <MenuItem>
        <LayoutItems icon="moon" 
          text1="text" 
          text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </MenuItem>
      <MenuItem pt="4">
        <Caps icon="moon" 
          text1="text" 
          text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </MenuItem>
      <MenuItem pt="4">
        <Caps icon="moon" 
          text1="text" 
          text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </MenuItem>
      <MenuItem pt="4">
        <Caps icon="moon" 
          text1="text" 
          text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default My_Menu