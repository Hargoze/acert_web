import React from "react";
import { Box, Heading, Badge, Flex, Text, Icon, Link, Button, Image, Stack, IconButton, PseudoBox, useDisclosure, List, ListItem, ListIcon} from "@chakra-ui/core";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/core"

const HeaderImg = ({ images }) => {
    return (
        <Stack>
            <Box w="280px" h="150px" rounded="lg" overflow="hidden">
                <Image src={images.image} alt={images.url} w="100%" h="100%"/>
            </Box>
            <Box maxWidth="280px" h="110px" pt="4" pb="2">
                <Text fontSize="20px" fontWeight="600" color="secondary.300">{images.description}</Text>
            </Box>
            <Box>
                <Link href={images.href} fontSize="20px" color="primary.400">{images.link}</Link>
                <Icon name="arrow-forward" size="20px" color="primary.400" ml="2"/>
            </Box>
        </Stack>
    )
}

const DisplayList = ({links}) => {
    if (links.status === "READY") {
        return (
        <Box> 
            <Link href={links.href}>{links.name}</Link>
        </Box>
        )
    } else if (links.status === "COMING_SOON") {
        return (
        <Box>
            <Link isDisabled href={links.href}>{links.name}</Link>
            <Badge ml="4" px="2">Coming soon</Badge>
        </Box>
        )
    } else {
        return (
        <Box>
            <Link href={links.href}>{links.name}</Link>
            <Badge variant="solid" variantColor="red" ml="4" px="2">Beta</Badge>
        </Box>
        )
    }
}

const HeaderMenu = ({content}) => {
  return (
    <Flex
      display={{xs: "none",sm: "none", md:"none", lg:"flex" }}
      alignItems="center"
      justify="space-between"
      w="50%"
      fontSize="22px"
    >
        {content.map((current, i) => (
            <Menu
            key={i}
            >
              {({ isOpen }) => (
              <React.Fragment>
              <MenuButton
                as={Button}
                bg="white"
                px={4}
                py={2}
                _hover={{ bg: "white" }}
                _active={{ bg: "white" }}
                _focus={{ outline: 0, boxShadow: "none" }}
                rightIcon={isOpen ? "chevron-up" : "chevron-down"}
                fontSize={{lg:"16px", xl:"24px"}}
              >
                {current.name}
              </MenuButton>
            <MenuList w="full" bg="white">
                <MenuItem  bg="white" _focus={{bg: "white"}}>
                <Stack bg="white" fontSize="md" align="center" w="100%" >
                    <Flex h="xs" justify="space-around" align="center" w="75%">
                        <Stack w="50%" h="300px" justify="space-between">
                            <List spacing={1} fontSize="22px">
                                <ListItem pb="4">
                                    <Text textTransform="uppercase" fontSize="24px" fontWeight="600">{current.name}</Text>
                                </ListItem>
                                {current.link.map((link, j) => (
                                <ListItem pl="2" key={j}>
                                    <DisplayList links={link}/>
                                </ListItem>
                                ))}
                            </List>
                            <List>
                            {current.highlight.map((highlight, j) => (
                                <ListItem pl="2" key={j}>
                                    <Link href={highlight.href} fontSize="24px" color="primary.400">{highlight.name}</Link>
                                    <Icon name="arrow-forward" size="20px" color="primary.400" ml="2"/>
                                </ListItem>
                            ))}
                            </List>
                        </Stack>
                        <Flex justify="space-around" w="750px" borderLeft="1px" borderRadius="md" borderColor="gray.200">
                        {current.picture.map((images, j) => (
                            <HeaderImg 
                            images={images} 
                            key={j}/>
                        ))}
                        </Flex>
                    </Flex>
                </Stack>
                </MenuItem> 
            </MenuList>
            </React.Fragment>
        )}
        </Menu>
        ))}
    </Flex>
);
};

export default HeaderMenu