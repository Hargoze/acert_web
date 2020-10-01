const FAQ = () => {
    return (
      <SimpleGrid>
        <Box w="250px">
        <Text fontSize="18px" fontWeight="600">Do you store any credit card information in your systems?</Text>
        <Text>No. All credit card activity and information is handled by our third-party provider, Stripe. See <Link color="primary.400">Stripe’s Terms and Services</Link>.</Text>
      </Box>
      </SimpleGrid>   
    )
  }