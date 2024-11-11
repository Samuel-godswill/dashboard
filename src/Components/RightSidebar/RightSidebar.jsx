import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "./calendarStyles.css"; 

const RightSidebar = () => {
  const [date, setDate] = useState(new Date());
  const [userName, setUserName] = useState("omoòga"); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newUserName, setNewUserName] = useState(userName);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleProfileChange = () => {
    onOpen();
  };

  const handleSaveChanges = () => {
    setUserName(newUserName);
    onClose();
  };

  return (
    <Box
      width={{ base: "100%", md: "300px" }} 
      padding={{ base: "10px", md: "20px" }}
      bg="white" 
      borderRadius="md"
      boxShadow="md" 
      position={{ base: "relative", md: "fixed" }} 
      right={{ base: "0", md: "0" }} 
      top={{ base: "0", md: "0" }}
      height={{ base: "auto", md: "100vh" }} 
      overflowY="auto" 
    >
      <Flex align="center" mb={4} justify={{ base: "center", md: "flex-start" }}> 
        <Text fontSize={{ base: "sm", md: "md" }} mr={2}> 
          {userName}
        </Text>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Profile"
            icon={<BellIcon />}
            variant="outline"
            onClick={handleProfileChange}
          />
          <MenuList>
            <MenuItem onClick={handleProfileChange}>Change Profile</MenuItem>
            <MenuItem onClick={() => console.log("Logout clicked")}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box mb={4} display={{ base: "flex", md: "block" }} justifyContent={{ base: "center", md: "flex-start" }} alignItems="center">
        <Calendar onChange={handleDateChange} value={date} />
      </Box>

      {/* Modal for changing username */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter new username"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              mb={4}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Text fontSize='1xl' fontWeight='bold' marginBottom='20px' textAlign={{ base: 'center', md: 'left' }}>Last Notification</Text>
        <Stack spacing={4}>
        <Stack textAlign={{ base: 'center', md: 'left' }} backgroundColor='#fcfcfc' p='10px' borderRadius='8px'>
          <Text fontSize="18" fontWeight="bold">
            Person 1
          </Text>
          <Text fontSize="16" marginTop='-15px'>
            made an appointment
          </Text>
        </Stack>
        <Stack textAlign={{ base: 'center', md: 'left' }} backgroundColor='#fcfcfc' p='10px' borderRadius='8px'>
          <Text fontSize="18" fontWeight="bold">
          Person 2
          </Text>
          <Text fontSize="16" marginTop='-15px'>
            made an appointment
          </Text>
        </Stack>
        <Stack textAlign={{ base: 'center', md: 'left' }} backgroundColor='#fcfcfc' p='10px' borderRadius='8px'>
          <Text fontSize="18" fontWeight="bold">
          Person 3
          </Text>
          <Text fontSize="16" marginTop='-15px'>
            made an appointment
          </Text>
        </Stack>
        <Stack textAlign={{ base: 'center', md: 'left' }} backgroundColor='#fcfcfc' p='10px' borderRadius='8px'>
          <Text fontSize="18" fontWeight="bold">
          Person 4
          </Text>
          <Text fontSize="16" marginTop='-15px'>
            made an appointment
          </Text>
        </Stack>
        <Stack textAlign={{ base: 'center', md: 'left' }} backgroundColor='#fcfcfc' p='10px' borderRadius='8px'>
          <Text fontSize="18" fontWeight="bold">
          Person 5
          </Text>
          <Text fontSize="16" marginTop='-15px'>
            made an appointment
          </Text>
        </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RightSidebar;