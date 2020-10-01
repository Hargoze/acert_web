import BlogList from "../components/BlogList"
import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link} from '@chakra-ui/core'

const Blog = () => {
    return (
        <Stack>
            <Link href="/">
                <Button>Go back home</Button>
            </Link>
            <BlogList blog="" />
        </Stack>
    )
}

export default Blog