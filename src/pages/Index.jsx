import { Box, Flex, Text, VStack, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [data, setData] = React.useState([
    { name: 'Jan', Sales: 4000, Revenue: 2400, Expenses: 2400 },
    { name: 'Feb', Sales: 3000, Revenue: 1398, Expenses: 2210 },
    { name: 'Mar', Sales: 2000, Revenue: 9800, Expenses: 2290 },
    { name: 'Apr', Sales: 2780, Revenue: 3908, Expenses: 2000 },
    { name: 'May', Sales: 1890, Revenue: 4800, Expenses: 2181 },
    { name: 'Jun', Sales: 2390, Revenue: 3800, Expenses: 2500 },
    { name: 'Jul', Sales: 3490, Revenue: 4300, Expenses: 2100 },
  ]);

  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" mb={10}>
        <Heading mb={4}>Business Dashboard</Heading>
        <Text fontSize="lg">Overview of key business metrics</Text>
      </Flex>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Expenses" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Index;