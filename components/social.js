import { Box, Stack, Link, SimpleGrid, Flex, Text} from "@chakra-ui/core";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import { SiRiot } from "react-icons/si"

const Social = () => {
    return (
      <Stack w="100%" pr="3" mt="3" justify="space-around" align="center" h="24">
        <Box mb="2" display={{base:"none", lg:"block"}}>
          <Text textTransform="uppercase" textAlign={{xs:"right", lg:"left"}}> Join the discussion</Text>
        </Box>
        <Stack isInline w="40%" justify="space-around">
          <Link href="https://www.linkedin.com/company/acerthq">
            <Box as={FaLinkedin} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://github.com/acertio">
            <Box as={FaGithub} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://twitter.com/acertHQ">
            <Box as={FaTwitter} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://matrix.to/#/!itNFPuHTDmvGSASiDR:matrix.org/$f76Ann6mpRupw7E31qzgqNwGx4SrdcWHzviRZ-FzSYs?via=matrix.org">
            <Box as={SiRiot} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
        </Stack>
      </Stack>
    )
}

export default Social