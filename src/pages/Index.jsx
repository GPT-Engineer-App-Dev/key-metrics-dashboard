import { Box, Flex, Text, VStack, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Progress } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const Index = () => {
  const [data, setData] = React.useState([
    { name: 'Jan', Sales: 40, Revenue: 24, Expenses: 24 },
    { name: 'Feb', Sales: 30, Revenue: 14, Expenses: 22 },
    { name: 'Mar', Sales: 20, Revenue: 98, Expenses: 23 },
    { name: 'Apr', Sales: 28, Revenue: 39, Expenses: 20 },
    { name: 'May', Sales: 18, Revenue: 48, Expenses: 22 },
    { name: 'Jun', Sales: 24, Revenue: 38, Expenses: 25 },
    { name: 'Jul', Sales: 35, Revenue: 43, Expenses: 21 },
  ]);

  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" mb={10}>
        <Heading mb={4}>Business Dashboard</Heading>
        <Text fontSize="lg">Overview of key business metrics</Text>
      </Flex>
      <VStack spacing={4} align="stretch">
        {data.map((item, index) => (
          <Box key={index}>
            <Text>{item.name}</Text>
            <Text>Sales: <motion.div initial={{ width: 0 }} animate={{ width: `${item.Sales}%` }} transition={{ duration: 0.5 }}><Progress colorScheme="purple" size="sm" value={item.Sales} /></motion.div></Text>
            <Text>Revenue: <motion.div initial={{ width: 0 }} animate={{ width: `${item.Revenue}%` }} transition={{ duration: 0.5 }}><Progress colorScheme="green" size="sm" value={item.Revenue} /></motion.div></Text>
            <Text>Expenses: <motion.div initial={{ width: 0 }} animate={{ width: `${item.Expenses}%` }} transition={{ duration: 0.5 }}><Progress colorScheme="orange" size="sm" value={item.Expenses} /></motion.div></Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;