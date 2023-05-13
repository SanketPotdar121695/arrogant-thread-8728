/** @format */

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Spinner,
  Text,
  Box
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ToastExample } from '../../assets/ToastExample';
import { login } from '../../redux/LoginReducer/authAction';
import { NavLink, useLocation, Navigate } from 'react-router-dom';

const obj = {
  email: '',
  password: ''
};

export default function Login() {
  const [formData, setFormData] = useState(obj);
  const location = useLocation();
  const comingFrom = location.state?.data || '/';

  const dispatch = useDispatch();
  const { isAuth, isError, isLoading, role } = useSelector(
    (store) => store.authReducer
  );

  // const store = useSelector((store) => store.authReducer);
  // console.log(store);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));

    // console.log(formData);
    setFormData(obj);
  };

  // console.log(isAuth, role);
  if (isAuth) return <Navigate to={comingFrom} replace />;

  return isLoading ? (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  ) : (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                required
                name='email'
                onChange={handleChange}
                value={formData.email}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                required
                name='password'
                onChange={handleChange}
                value={formData.password}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={'blue'}
                variant={'solid'}
                type='submit'
                isDisabled={isAuth ? true : false}
              >
                Sign in
              </Button>

              <Box>
                New user?{' '}
                <NavLink to='/signup'>
                  <Text
                    display={'inline'}
                    color={'blue.500'}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Signup
                  </Text>
                </NavLink>
              </Box>
            </Stack>
          </Stack>
        </form>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
