import React from 'react';
import { Box, VStack, Text, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import { MdDashboard, MdCalendarToday, MdBarChart, MdPerson, MdChat, MdLogout } from 'react-icons/md';

const Sidebar = () => {
  return (
    <Box
    position='fixed'
      display="flex"
      flexDirection="column"
      width="250px"
      height="100vh"
      bg="white" 
      color="gray.800"
      padding="20px"
      boxShadow="md" 
    >
      <Text fontSize="2xl" fontWeight="bold" mb="40px">
        omoògaDash
        <Divider my={4} />
      </Text>
      
      <VStack align="start" spacing={4} flex="1">
        <List spacing={3}>
          <ListItem
            mb="2rem" 
            _hover={{ bg: '#fcfcfc', cursor: 'pointer' }} 
            p={2} 
            borderRadius="md" 
          >
            <ListIcon as={MdDashboard} color="teal.400" />
            Dashboard
          </ListItem>
          <ListItem
            mb="2rem" 
            _hover={{ bg: '#fcfcfc ', cursor: 'pointer' }} 
            p={2} 
            borderRadius="md" 
          >
            <ListIcon as={MdCalendarToday} color="teal.400" />
            Calendar
          </ListItem>
          <ListItem
            mb="2rem" 
            _hover={{ bg: '#fcfcfc ', cursor: 'pointer' }} 
            p={2} 
            borderRadius="md" 
          >
            <ListIcon as={MdBarChart} color="teal.400" />
            Statistics
          </ListItem>
          <ListItem
            mb="2rem" 
            _hover={{ bg: '#fcfcfc ', cursor: 'pointer' }} 
            p={2} 
            borderRadius="md" 
          >
            <ListIcon as={MdPerson} color="teal.400" />
            Profile
          </ListItem>
          <ListItem
            mb="2rem" 
            _hover={{ bg: '#fcfcfc ', cursor: 'pointer' }} 
            p={2} 
            borderRadius="md" 
          >
            <ListIcon as={MdChat} color="teal.400" />
            Chat
          </ListItem>
        </List>
        
        {/* Log Out Item */}
        <Box mt="auto"> 
          <Divider my={4} /> 
          <List>
            <ListItem
              _hover={{ bg: '#fcfcfc ', cursor: 'pointer' }} 
              p={2} 
              borderRadius="md" 
            >
              <ListIcon as={MdLogout} color="red.400" />
              Log Out
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;