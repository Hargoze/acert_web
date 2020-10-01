import React from "react";
import Head from "next/head"
import MyHeader from '../components/MyHeader'
import Footer from "../components/footer"
import { Container } from '../components/Container'
import { Hero } from '../components/hero'
import { InBetween } from '../components/in_between'
import { CallToAction } from "../components/call_to_action"
import { SideComponent } from "../components/sideComponent"
import { BottomComponent } from "../components/bottomComponent"
import { PrismaClient } from '@prisma/client';

const Post = ({headers}) => {   
  console.log("env var :", process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID)
  return (
  <Container>
  <Head>
    <link rel="icon" sizes="48x48" href="/miniLogo.ico"/>
    <meta charSet="utf-8" />
    <title>acert | reframing digital access</title>
  </Head>
    <MyHeader message="have a nice day :)" alert={true} content={headers}/>
    <Hero />
    <InBetween />
    <SideComponent link="#" line1="i dont get it," line2="explain differently"/>
    <CallToAction />
    <Footer/>
    <BottomComponent />
  </Container>
  )
}

export default Post

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const headers = await prisma.header.findMany({
    include: {highlight: true, picture: true, link: true }
  })
  return {
    props: {
      headers
    }
  };
}