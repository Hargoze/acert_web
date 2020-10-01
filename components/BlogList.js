import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link} from '@chakra-ui/core'

const BlogList = ({blog}) => {
    return (
        <Link 
            href="/"
            _hover={{textDecoration:"none"}}
            //as={`/blogs/${blog.id}`} href={`/blogs?id=${blog.id}`}
        >
        <Stack 
        w="504px" 
        h="416px"
        justify="space-between"
        //bgImage={blog.image.url}
        color="white"
        rounded="lg"
        overflow="hidden"
        bgImage="url('https://images.ctfassets.net/xit7f234flxz/5PwxMkw2fEuoxeOFXlpZBl/3e1e40361dc6234bbbdee39ff88731e1/smart_city.jpg')"
        >
            <Box maxWidth="60%" pt="6" pl="12" >
                <Heading fontSize="32px" fontWeight="bold">{blog.title}Smart Cities</Heading>
                <Text fontSize="19px" pt="2">
                    {blog.Text}
                    Connecting city infrastructure tothe Tangle for improved efficiency, privacy and safety
                </Text>
            </Box>
            <Box>
                <IconButton icon="chevron-right" size="lg" p="2" bg="primary.500" rounded="full" ml="12" mb="6" _hover={{bg:"primary.600"}} _active={{bg:"primary.700"}}/>
            </Box>
        </Stack>
        </Link>
    )
}

export default BlogList