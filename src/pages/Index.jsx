import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Stack, Grid, GridItem } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            My Website
          </Heading>
        </Flex>
        <Stack direction="row" spacing={4} align="center">
          <Button variant="link">Home</Button>
          <Button variant="link">About</Button>
          <Button variant="link">Services</Button>
          <Button variant="link">Contact</Button>
        </Stack>
      </Flex>

      {/* Hero */}
      <Flex justify="center" align="center" bgImage="https://images.unsplash.com/photo-1611080402167-ed75bae6df32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3MTI0NDg3NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="500px">
        <Stack spacing={6} w="50%" textAlign="center">
          <Heading as="h1" size="4xl" color="white">
            Welcome to My Website
          </Heading>
          <Text fontSize="xl" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Button colorScheme="blue" size="lg">
            Learn More
          </Button>
        </Stack>
      </Flex>

      {/* Features */}
      <Grid templateColumns="repeat(3, 1fr)" gap={10} p={20}>
        <GridItem>
          <Heading as="h3" size="lg" mb={4}>
            Feature 1
          </Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius orci ac nibh ultricies, vitae bibendum velit fringilla.</Text>
        </GridItem>
        <GridItem>
          <Heading as="h3" size="lg" mb={4}>
            Feature 2
          </Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius orci ac nibh ultricies, vitae bibendum velit fringilla.</Text>
        </GridItem>
        <GridItem>
          <Heading as="h3" size="lg" mb={4}>
            Feature 3
          </Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius orci ac nibh ultricies, vitae bibendum velit fringilla.</Text>
        </GridItem>
      </Grid>

      {/* About */}
      <Flex p={20}>
        <Box mr={10}>
          <Image src="https://images.unsplash.com/photo-1531986733711-de47444e8cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwc21pbGluZyUyMG1hbnxlbnwwfHx8fDE3MTI0NDg3NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="About Us" />
        </Box>
        <Box>
          <Heading as="h2" size="2xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius orci ac nibh ultricies, vitae bibendum velit fringilla. Nulla facilisi. Donec euismod, nisl eget bibendum bibendum, nisl elit aliquam ipsum, nec sagittis sem nibh id elit.</Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" p={10} bg="gray.100" justify="space-between">
        <Box>
          <Heading as="h4" size="md">
            My Website
          </Heading>
          <Text mt={4}>© 2023 My Website. All rights reserved.</Text>
        </Box>
        <Stack direction="row" spacing={6}>
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
