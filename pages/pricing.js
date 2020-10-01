import React from "react";
import Head from "next/head"
import MyHeader from '../components/MyHeader'
import Footer from "../components/footer"
import { Container } from '../components/Container'
import { BottomComponent } from "../components/bottomComponent"
//import {VersionComparator} from "../components/Version_comparator"
import { PrismaClient } from '@prisma/client';
import { Flex, Heading, Link, Stack, Box, Text, Icon, Divider, Button, SimpleGrid, Image, Grid, PseudoBox} from '@chakra-ui/core'
import { List, ListItem, ListIcon } from "@chakra-ui/core";

const PriceBox = ({name, price1, price2, yearly, list}) => {
  const currency = "$"
  return (
  <PseudoBox as="button"
    role="group"
    shadow="0 7px 29px -12px rgba(0,0,0,34)"
    _hover={{transform: "scale(1.01)", textDecoration:"none", shadow:"0 7px 29px -8px rgba(0,0,0,34)"}} 
    rounded="lg" 
    my="10"
    mx="4"
    p="6"
  >
    <Stack align="center" justify="space-between" w="100%" h="380px">
      <Box>
        <Text fontSize="40px">{name}</Text>
        <Flex align="center" justify="center">
          <Stack >
            <Text color="primary.500" fontSize="70px" display={ yearly ? "block" : "none"}>{price1 === 0 ? "free" : price1 + " " + currency}</Text>
            <Text color="primary.500" fontSize="70px" display={ yearly ? "none" : "block"}>{price2 === 0 ? "free" : price2 + " " + currency}</Text>
          </Stack>
          <Stack justify="center" w="100px" display={price1 === 0 ? "none" : "flex"}>
            <Text>{price1 === 0 ? null : "per month"}</Text>
          </Stack>
        </Flex>
      </Box>
      <Stack align="start" w="100%">
        <List textAlign="left" spacing={2}>
        {list.features.map((elem, i) => (
          <ListItem key={i}>
            <ListIcon icon="check-circle" color="secondary.300" />
            {elem}
            </ListItem>
        ))}
        </List>
      </Stack>
      <Stack align="start" w="100%">
      <PseudoBox
        fontWeight="semibold"
        py={2}
        px="16"
        rounded="md"
        bg="transparent"
        border="1px" borderRadius="md"
        borderColor="primary.500"
        _groupHover={{bg:"primary.500", color:"white"}}
      >
        Get started
      </PseudoBox>
      </Stack>
    </Stack>
  </PseudoBox>
  )
}

const FeatureGroup = ({titre}) => {
  return (
    <Flex border="1px" borderRadius="md" borderColor="gray.200" py="2" bg="gray.100" pl="4">
      <Text>{titre}</Text>
    </Flex>
  )
}

const FeatureIcon = ({status}) => {
  switch (status) {
    case "yes":
      return (
        <Box><Icon name="check" color="green.400"/></Box>
      )
    case "no":
      return (
        <Box><Icon name="close" color="red.400"/></Box>
      )
    default:
      return (
        <Flex align="center" justify="center">
          <Icon name="question" color="orange.400" mr="2"/>
          <Text>{status}</Text>
        </Flex>
      )
  }
}

const Versus = ({titre, icon1, icon2}) => {
  return (
    <Flex >
      <Box w="60%" border="1px" borderRadius="md" borderColor="gray.200" py="2" pl="4">{titre}</Box>
      <Stack w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200" py="2">
        <FeatureIcon status={icon1}/>
      </Stack>
      <Stack w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200" py="2">
      <FeatureIcon status={icon2}/>
      </Stack>
    </Flex>
  )
}

const VersionComparator = ({features}) => {
  return (
      <Stack w="70%" my="4">
        <Flex>
          <Stack w="60%">
            <Heading pl="4" border="1px" borderRadius="md" borderColor="gray.200">Features</Heading>
          </Stack>
          <Stack  w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200">
            <Text>open source</Text>
          </Stack>
          <Stack w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200">
            <Text>enterprise edition</Text>
          </Stack>
        </Flex>
        {features.map((elem, i) => (
        <Versus titre={elem.name} icon1={elem.acert} icon2={elem.competitor} key={i}/>
        ))}
      </Stack>
  )
}

const Pricing = ({headers, price, features}) => {
  console.log(features)
  const [yearly, setShow] = React.useState(false);
  const handleToggle = () => setShow(!yearly);
  return (
    <Container>
    <Head>
      <link rel="icon" sizes="48x48" href="/miniLogo.ico" />
      <title>pricing - acert</title>
      <meta name="theme-color" content="#ffffff" />
    </Head>
      <MyHeader message="have a nice day :)" alert={true} content={headers}/>
      <Box pt="9rem" w="100%"></Box>
      <Stack align="center">
        <Box w="400px" textAlign="center">
          <Text textTransform="uppercase" fontSize="38px">meaningful conversations, at scale.</Text>
        </Box>
        <Text>Pick a plan, cancel any time.</Text>
        <PseudoBox as="button" onClick={handleToggle} bg="gray.300" p="2">
          <Flex>
            <PseudoBox bg={{bg: yearly ? "gray.300" : "gray.500"}} px="4">yearly</PseudoBox>
            <PseudoBox bg="gray.500" w="10px"/>
            <PseudoBox bg={{bg: yearly ? "gray.500" : "gray.300"}} px="4">monthly</PseudoBox>
          </Flex>
        </PseudoBox>
      </Stack>
      <Stack align="center" w="90%"display={{base:"flex", md:"none"}}>
      {price.map((elem, i) => (
        <PriceBox name={elem.name} price1={elem.price1} price2={elem.price2} yearly={yearly} list={JSON.parse(elem.features)} key={i}/>
      ))}
      </Stack>
      <Flex w="100%" display={{base:"none", md:"flex"}} justify="center">
      {price.map((elem, i) => (
        <PriceBox name={elem.name} price1={elem.price1} price2={elem.price2} yearly={yearly} list={JSON.parse(elem.features)} key={i}/>
      ))}
      </Flex>
      <VersionComparator features={features}/>
      <Box w="400px" py="4">
        <Text fontSize="28px" fontWeight="600" pb="4">Do you store any credit card information in your systems?</Text>
        <Text fontSize="22px">No. All credit card activity and information is handled by our third-party provider, Stripe. See <Link color="primary.400">Stripe’s Terms and Services</Link>.</Text>
      </Box>
      <Footer />
      <BottomComponent />
    </Container>
    )
}

export default Pricing

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const headers = await prisma.header.findMany({
    include: {highlight: true, picture: true, link: true }
  })
  const features = await prisma.feature.findMany()
  const price = await prisma.price.findMany()
  return {
    props: {
      headers,
      price,
      features,
    }
  };
}
