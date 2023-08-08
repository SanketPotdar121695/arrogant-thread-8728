/** @format */

// import axios from "axios";
// import React, { useState } from "react";

// const obj = {
//   firstname: "",
//   lastname:"",
//   email: "",
//   password: ""
// };

// export const Signup = () => {
// const [formData, setFormData] = useState(obj);

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   // console.log(name,value)
//   setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   axios
//     .post(`https://electro-emporium.cyclic.app/user/auth/register`, formData)
//     .then((res) => console.log(res.data))
//     .catch((err)=>console.log(err.response.data))

//   console.log(formData);
//   setFormData(obj);
// };

//   return (
//     <div>
//       <h1>Signup page</h1>
//       <form onSubmit={handleSubmit}>
//       First name:{" "}
//         <input
//           name="firstname"
//           onChange={handleChange}
//           value={formData.firstname}
//           type="text"
//           placeholder="enter your firstName"
//         />
//         <br />
//         <br />
//         Last name:{" "}
//         <input
//           name="lastname"
//           onChange={handleChange}
//           value={formData.lastname}
//           type="text"
//           placeholder="enter your LastName"
//         />
//         <br /><br />
//         Email:{" "}
//         <input
//           name="email"
//           onChange={handleChange}
//           value={formData.email}
//           type="text"
//           placeholder="enter your email"
//         />
//         <br />
//         <br />
//         Password:{" "}
//         <input
//           name="password"
//           onChange={handleChange}
//           value={formData.password}
//           type="text"
//           placeholder="enter your password"
//         />
//         <br />
//         <br />

//         <br />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail
} from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import axios from 'axios';
import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Navbar/Footer';
import { useNavigate } from 'react-router-dom';

const obj = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
};

export default function Signup() {
  const [formData, setFormData] = useState(obj);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = formData;
    if (!firstname || !lastname || !email || !password) {
      // console.log(res.data)
      toast({
        position: 'top',
        title: 'All fields are required',
        description: 'Fill all the empty fields.',
        status: 'warning',
        duration: 2000,
        isClosable: true
      });
      return;
    }
    axios
      .post(`${process.env.REACT_APP_baseURL}/user/auth/register`, formData)
      .then((res) => {
        // console.log(res.data);
        toast({
          position: 'top',
          title: res.data.message,
          description: "We've created a new account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true
        });
        return navigate('/login');
      })
      .catch((err) => {
        // console.log(err.response.data);
        toast({
          position: 'top',
          title: 'Account not created',
          description: err.response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true
        });
      });
    // console.log(formData);
    setFormData(obj);
  };
  return (
    <>
      <Container
        bg='#f2f4f6'
        maxW='full'
        mt={0}
        centerContent
        overflow='hidden'
      >
        <Flex>
          <Box
            bg='#455A64'
            color='white'
            borderRadius='lg'
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Text
              alignItems={'center'}
              fontSize={40}
              fontWeight={'bold'}
              pb={8}
            >
              Create Your Apple ID
            </Text>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems='flex-start'>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='white'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color='#1970F1' size='20px' />}
                        >
                          000 800 100 9009
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='white'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color='#1970F1' size='20px' />}
                        >
                          support.apple@gmail.com
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='white'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={
                            <MdLocationOn color='#1970F1' size='20px' />
                          }
                        >
                          California, United States
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems='flex-start'
                    >
                      <IconButton
                        aria-label='facebook'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#E0E0E0' }}
                        icon={<FcGoogle size='28px' />}
                      />
                      <IconButton
                        aria-label='github'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size='28px' />}
                      />
                      <IconButton
                        aria-label='discord'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size='28px' />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg='white' borderRadius='lg'>
                    <Box m={8} color='#0B0E3F'>
                      <VStack spacing={2}>
                        <FormControl id='firstname'>
                          <FormLabel>First Name</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<BsPerson color='gray.800' />}
                            />
                            <Input
                              type='text'
                              size='md'
                              name='firstname'
                              onChange={handleChange}
                              value={formData.firstname}
                              required
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id='lastname'>
                          <FormLabel>Last Name</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<BsPerson color='gray.800' />}
                            />
                            <Input
                              type='text'
                              size='md'
                              name='lastname'
                              onChange={handleChange}
                              value={formData.lastname}
                              required
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id='email'>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<MdOutlineEmail color='gray.800' />}
                            />
                            <Input
                              type='email'
                              size='md'
                              name='email'
                              onChange={handleChange}
                              value={formData.email}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id='password'>
                          <FormLabel>Password</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<RiLockPasswordFill color='gray.800' />}
                            />
                            <Input
                              type='password'
                              size='md'
                              name='password'
                              onChange={handleChange}
                              value={formData.password}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id='button' float='right'>
                          <Button
                            variant='solid'
                            bg='#0D74FF'
                            color='white'
                            _hover={{}}
                            onClick={handleSubmit}
                          >
                            SignUp
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
