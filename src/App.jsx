import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Text, Link } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

const Header = () => (
  <Flex as="header" align="center" justify="space-between" p={4} bg="brand.800" color="white">
    <Image src="/logo.png" h="50px" />
    <Box>
      <Link href="/" p={2}>Home</Link>
      <Link href="/about" p={2}>About</Link>
      <Link href="/contact" p={2}>Contact</Link>
    </Box>
  </Flex>
);

const Footer = () => (
  <Flex as="footer" align="center" justify="space-between" p={4} bg="brand.700" color="white">
    <Text fontSize="sm">© 2023 Business Dashboard. All rights reserved.</Text>
    <Flex>
      <Link href="/privacy" p={2}>Privacy Policy</Link>
      <Link href="/terms" p={2}>Terms of Service</Link>
      <Link href="/contact" p={2}>Contact Us</Link>
    </Flex>
  </Flex>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;