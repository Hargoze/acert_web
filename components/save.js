import React from "react";
import { Box, Heading, Flex, Text, Icon, Link, Button, Image, Stack, IconButton, PseudoBox, useDisclosure, List, ListItem, ListIcon} from "@chakra-ui/core";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core"

const MenuBox = ({image, desc, linkText, link}) => {
    return (
        <Stack w="xs" h="16rem">
            <Box w="280px" h="150px">
                <Image src={image}/>
            </Box>
            <Stack justify="space-around" h="full">
                <Text >{desc}</Text>
                <Link href={link}>{linkText}</Link>
            </Stack>
        </Stack>
    )
}

const HeaderMenu = ({content}) => {
    console.log("content:", content[0])
  return (
    <Flex
      display={{xs: "none",sm: "none", md:"none", lg:"flex" }}
      alignItems="center"
      justify="space-between"
      w="50%"
      fontSize="22px"
    >
      <Menu 
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
          Products
        </MenuButton>
        <MenuList 
        w="full"
        justify="center" align="center"
        >
        {content.map((link) => (
            <Link>{link.name}</Link>
        ))}
        {content.map((picture) => (
            <Text>{picture.url}</Text>
        ))}
        </MenuList>
        </React.Fragment>
        )}
      </Menu>

      <Menu 
      ////onMouseEnter={() => setIsOpen2(true)} isOpen={isOpen2}
      ////onMouseLeave={() => setIsOpen2(false)} isOpen={isOpen2}
      >
          {({ isOpen }) => (
        <React.Fragment>
        <MenuButton
            as={Button}
            bg="white"
            px={4}
            py={2}
            //onMouseEnter={() => setIsOpen2(true)} isOpen={isOpen2}
            //onMouseLeave={() => setIsOpen2(false)} isOpen={isOpen2}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            _focus={{ outline: 0, boxShadow: "none" }}
            rightIcon={isOpen ? "chevron-up" : "chevron-down"}
            fontSize={{lg:"16px", xl:"24px"}}
        >
          Use cases
        </MenuButton>
        <MenuList 
        w="full"
        justify="center" align="center"
        //onMouseEnter={() => setIsOpen2(true)} isOpen={isOpen2}
        //onMouseLeave={() => setIsOpen2(false)} isOpen={isOpen2}
        >
            <MenuItem _focus={{bg:"white"}} fontSize="md">
            <Flex h="xs" justify="space-around" align="center" w="100%">
                <Flex justify="space-around" align="center" w={{ lg:"100%", xl:"75%"}}>
                    <Stack h="16rem">
                        <Text pb="3" textTransform="uppercase">Examples</Text>
                        <List spacing={1}>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" />
                                Terraform
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Vault
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Consul
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Nomad
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Vagrant
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Packer
                            </ListItem>
                        </List>
                        <Link pt="4" href="https://chakra-ui.com" isExternal>
                            Learn our products<Icon name="arrow-forward" />
                        </Link>
                    </Stack>
                    <Stack h="16rem">
                        <Text textTransform="uppercase" pb="3">cloud</Text>
                        <List>
                            <ListItem>HashiCorp Cloud Platform (HCP)</ListItem>
                            <ListItem>Terraform Cloud</ListItem>
                            <ListItem>HashiCorp Consul Service (HCS) on Azure</ListItem>
                        </List>
                        <Text mt="2" textTransform="uppercase">policy</Text>
                        <Text mt="2" >Sentinel</Text>
                    </Stack>
                    <MenuBox 
                        image="/1574103233-cloudoperatingmodel-2x.webp" 
                        desc="Unlocking the Cloud Operating Model" 
                        linkText="Read whitepaper"
                        link="#"
                    />
                    <MenuBox 
                        image="/1592787251-hcp-nav-feature.webp" 
                        desc="Our Vision for HashiCoup Cloud Plateform" 
                        linkText="Learn More"
                        link="#"
                    />
                </Flex>
            </Flex>
            </MenuItem>
        </MenuList>
        </React.Fragment>
        )}
      </Menu>

      <Menu 
      ////onMouseEnter={() => setIsOpen3(true)} isOpen={isOpen3}
      ////onMouseLeave={() => setIsOpen3(false)} isOpen={isOpen3}
      >
          {({ isOpen }) => (
        <React.Fragment>
        <MenuButton
            as={Button}
            bg="white"
            px={4}
            py={2}
            //onMouseEnter={() => setIsOpen3(true)} isOpen={isOpen3}
            //onMouseLeave={() => setIsOpen3(false)} isOpen={isOpen3}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            _focus={{ outline: 0, boxShadow: "none" }}
            rightIcon={isOpen ? "chevron-up" : "chevron-down"}
            fontSize={{lg:"16px", xl:"24px"}}
        >
          Pricing
        </MenuButton>
        <MenuList 
        w="full"
        justify="center" align="center"
        //onMouseEnter={() => setIsOpen3(true)} isOpen={isOpen3}
        //onMouseLeave={() => setIsOpen3(false)} isOpen={isOpen3}
        >
            <MenuItem _focus={{bg:"white"}} fontSize="md">
            <Flex h="xs" justify="space-around" align="center" w="100%">
                <Flex justify="space-around" align="center" w={{ lg:"100%", xl:"75%"}}>
                    <Stack h="16rem">
                        <Text pb="3" textTransform="uppercase">Blog</Text>
                        <List spacing={1}>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" />
                                Terraform
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Vault
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Consul
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Nomad
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Vagrant
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Packer
                            </ListItem>
                        </List>
                        <Link pt="4" href="https://chakra-ui.com" isExternal>
                            Learn our products<Icon name="arrow-forward" />
                        </Link>
                    </Stack>
                    <Stack h="16rem">
                        <Text textTransform="uppercase" pb="3">cloud</Text>
                        <List>
                            <ListItem>HashiCorp Cloud Platform (HCP)</ListItem>
                            <ListItem>Terraform Cloud</ListItem>
                            <ListItem>HashiCorp Consul Service (HCS) on Azure</ListItem>
                        </List>
                        <Text mt="2" textTransform="uppercase">policy</Text>
                        <Text mt="2" >Sentinel</Text>
                    </Stack>
                    <MenuBox 
                        image="/1574103233-cloudoperatingmodel-2x.webp" 
                        desc="Unlocking the Cloud Operating Model" 
                        linkText="Read whitepaper"
                        link="#"
                    />
                    <MenuBox 
                        image="/1592787251-hcp-nav-feature.webp" 
                        desc="Our Vision for HashiCoup Cloud Plateform" 
                        linkText="Learn More"
                        link="#"
                    />
                </Flex>
            </Flex>
            </MenuItem>
        </MenuList>
        </React.Fragment>
        )}
      </Menu>

      <Menu 
      ////onMouseEnter={() => setIsOpen4(true)} isOpen={isOpen4}
      ////onMouseLeave={() => setIsOpen4(false)} isOpen={isOpen4}
      >
          {({ isOpen }) => (
        <React.Fragment>
        <MenuButton
            as={Button}
            bg="white"
            px={4}
            py={2}
            //onMouseEnter={() => setIsOpen4(true)} isOpen={isOpen4}
            //onMouseLeave={() => setIsOpen4(false)} isOpen={isOpen4}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            _focus={{ outline: 0, boxShadow: "none" }}
            rightIcon={isOpen ? "chevron-up" : "chevron-down"}
            fontSize={{lg:"16px", xl:"24px"}}
        >
          Resources
        </MenuButton>
        <MenuList 
        w="full"
        justify="center" align="center"
        //onMouseEnter={() => setIsOpen4(true)} isOpen={isOpen4}
        //onMouseLeave={() => setIsOpen4(false)} isOpen={isOpen4}
        >
            <MenuItem _focus={{bg:"white"}} fontSize="md">
            <Flex h="xs" justify="space-around" align="center" w="100%">
                <Flex justify="space-around" align="center" w={{ lg:"100%", xl:"75%"}}>
                    <Stack h="16rem">
                        <Text pb="3" textTransform="uppercase">Products</Text>
                        <List spacing={1}>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" />
                                Terraform
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Vault
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Consul
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Nomad
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Vagrant
                            </ListItem>
                            <ListItem pl="2">
                                <ListIcon icon="check-circle" color="green.500" mr="4"/>
                                Packer
                            </ListItem>
                        </List>
                        <Link pt="4" href="https://chakra-ui.com" isExternal>
                            Learn our products<Icon name="arrow-forward" />
                        </Link>
                    </Stack>
                    <Stack h="16rem">
                        <Text textTransform="uppercase" pb="3">cloud</Text>
                        <List>
                            <ListItem>HashiCorp Cloud Platform (HCP)</ListItem>
                            <ListItem>Terraform Cloud</ListItem>
                            <ListItem>HashiCorp Consul Service (HCS) on Azure</ListItem>
                        </List>
                        <Text mt="2" textTransform="uppercase">policy</Text>
                        <Text mt="2" >Sentinel</Text>
                    </Stack>
                    <MenuBox 
                        image="/1574103233-cloudoperatingmodel-2x.webp" 
                        desc="Unlocking the Cloud Operating Model" 
                        linkText="Read whitepaper"
                        link="#"
                    />
                    <MenuBox 
                        image="/1592787251-hcp-nav-feature.webp" 
                        desc="Our Vision for HashiCoup Cloud Plateform" 
                        linkText="Learn More"
                        link="#"
                    />
                </Flex>
            </Flex>
            </MenuItem>
        </MenuList>
        </React.Fragment>
        )}
      </Menu>
    </Flex>
    );
};

export default HeaderMenu