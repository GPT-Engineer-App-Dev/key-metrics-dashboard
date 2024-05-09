import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={4} bg="brand.700" color="white">
      <Flex direction="column" align="center" justify="center">
        <Text fontSize="sm">© 2023 Business Dashboard, Inc.</Text>
        <Text fontSize="sm">All rights reserved.</Text>
        <Flex mt={2}>
          <Link href="#" p={2}>Privacy Policy</Link>
          <Link href="#" p={2}>Terms of Service</Link>
          <Link href="mailto:contact@businessdashboard.com" p={2}>Contact Us</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;