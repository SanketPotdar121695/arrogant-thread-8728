import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const AdminHome = () => {
  return (
    <Flex justify={'center'} align={'center'}>
      <Image
        src={
          'https://pbs.twimg.com/profile_images/934851009309839360/U5PjXCDE_400x400.jpg'
        }
        alt='work-in-progress'
      />
    </Flex>
  );
};

export default AdminHome;
