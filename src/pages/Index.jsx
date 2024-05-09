import { Box, Flex, Text, VStack, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" mb={10}>
        <Heading mb={4}>Business Dashboard</Heading>
        <Text fontSize="lg">Overview of key business metrics</Text>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
          <StatLabel>Sales</StatLabel>
          <StatNumber>$30,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$45,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            15.89%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
          <StatLabel>Expenses</StatLabel>
          <StatNumber>$20,000</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            5.00%
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;