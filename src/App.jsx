import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Image, Link, Box } from "@chakra-ui/react";
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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;