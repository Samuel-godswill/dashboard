import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Text,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdPerson, MdDescription, MdChat, MdStar } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the vital signs chart
const data = [
  { name: "Mon", heartRate: 72, bloodPressure: 120 },
  { name: "Tue", heartRate: 75, bloodPressure: 118 },
  { name: "Wed", heartRate: 70, bloodPressure: 122 },
  { name: "Thu", heartRate: 68, bloodPressure: 115 },
  { name: "Fri", heartRate: 74, bloodPressure: 119 },
  { name: "Sat", heartRate: 73, bloodPressure: 121 },
  { name: "Sun", heartRate: 76, bloodPressure: 117 },
];

const appointments = [
  {
    name: " Person1",
    disease: "Hypertension",
    date: "Nov 13, 2024",
    time: "10:00 AM",
  },
  {
    name: " Person2 ",
    disease: "Diabetes",
    date: "Nov 14, 2024",
    time: "11:00 AM",
  },
  {
    name: "Person3",
    disease: "Asthma",
    date: "Nov 15, 2024",
    time: "12:00 PM",
  },
  {
    name: "Person4",
    disease: "Allergy",
    date: "Nov 16, 2024",
    time: "1:00 PM",
  },
  {
    name: "Person5",
    disease: "Apendix",
    date: "Nov 17, 2024",
    time: "2:00 PM",
  },
];

const CenterSection = () => {
  return (
    <Box
      flex="1"
      width="100%"
      maxWidth={{ base: "100%", sm: "60px", md: "450px", lg: "710px", xl: "797px" }}
      padding={{ base: "10px", md: "20px" }}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      ml={{ base: "0", md: "-50px" }}
      overflowY="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Search Bar */}
      <InputGroup mb={4} width="100%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Search something here..."
          variant="outline"
          size="md"
          border="none"
          color="gray.800"
          placeholderColor="gray.500"
          bg="white"
        />
      </InputGroup>

      {/* Statistics Header */}
      <Text fontSize="lg" fontWeight="bold" mb={4} textAlign={{ base: "center", lg: "left" }}>
        Statistics
      </Text>

      {/* Statistics Container */}
      <Box bg="#fcfcfc" p={4} borderRadius="md" width="100%">
        <Flex wrap="wrap" justify="space-between">
          {/* Statistics Item 1 */}
          <Flex
            align="center"
            mb={4}
            width={{ base: "100%", md: "48%", lg: "23%" }}
            flex="1"
            justify="center"
          >
            <Icon as={MdPerson} boxSize={6} color="teal.400" mr={2} />
            <Box textAlign="left">
              <Text fontSize="1xl" fontWeight="bold">
                212
              </Text>
              <Text fontSize="sm" color="gray.500">
                Patients
              </Text>
            </Box>
          </Flex>

          {/* Statistics Item 2 */}
          <Flex
            align="center"
            mb={4}
            width={{ base: "100%", md: "48%", lg: "23%" }}
            flex="1"
          >
            <Icon as={MdDescription} boxSize={6} color="blue.400" mr={2} />
            <Box textAlign="left">
              <Text fontSize="1xl" fontWeight="bold">
                114
              </Text>
              <Text fontSize="sm" color="gray.500">
                Reports
              </Text>
            </Box>
          </Flex>

          {/* Statistics Item 3 */}
          <Flex
            align="center"
            mb={4}
            width={{ base: "100%", md: "48%", lg: "23%" }}
            flex="1"
          >
            <Icon as={MdChat} boxSize={6} color="red.600" mr={2} />
            <Box textAlign="left">
              <Text fontSize="1xl" fontWeight="bold">
                182
              </Text>
              <Text fontSize="sm" color="gray.500">
                Consultations
              </Text>
            </Box>
          </Flex>

          {/* Statistics Item 4 */}
          <Flex
            align="center"
            mb={4}
            width={{ base: "100%", md: "48%", lg: "23%" }}
            flex="1"
          >
            <Icon as={MdStar} boxSize={6} color="green.600" mr={2} />
            <Box textAlign="left">
              <Text fontSize="1xl" fontWeight="bold">
                127
              </Text>
              <Text fontSize="sm" color="gray.500">
                Experience
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Vital Signs Chart */}
      <Text fontSize="lg" fontWeight="bold" mb={4} mt="2rem" textAlign="center">
        Vital Signs
      </Text>
      <Box
        bg="#fcfcfc"
        p={4}
        borderRadius="md"
        height={{ base: "300px", md: "380px" }}
        width="100%"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Upcoming Appointments Section */}
      <Flex direction="column" mt={4} width="100%">
        <Text
          fontSize={{ base: "md", md: "lg" }} 
          fontWeight="bold" 
          mb={4} 
          textAlign="center"
        >
          Upcoming Appointments
        </Text>
        <Box borderWidth="1px" borderRadius="md" overflow="hidden">
          <Box overflowX="auto">
            <Table variant="striped" colorScheme="gray" width="100%">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Disease</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {appointments.map((appointment, index) => (
                  <Tr key={index}>
                    <Td>{appointment.name}</Td>
                    <Td>{appointment.disease}</Td>
                    <Td>{appointment.date}</Td>
                    <Td>{appointment.time}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CenterSection;