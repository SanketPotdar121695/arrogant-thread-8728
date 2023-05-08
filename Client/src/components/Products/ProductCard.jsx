import { Text, Image, Heading, GridItem } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ _id, title, image, price }) => {
  const actualPrice = Array.isArray(price[0]) ? price[0][0] : price[0];
  return (
    <GridItem
      p={4}
      w={'90%'}
      m='auto'
      shadow='xl'
      rounded='xl'
      borderWidth='1px'
      transition='0.4s ease-in-out'
      _hover={{ transform: 'scale(1.04)' }}
    >
      <Image
        src={image}
        alt={title}
        m={'auto'}
        roundedTop='lg'
        boxSize={'300px'}
        objectFit='contain'
      />
      <Heading size={'md'} noOfLines={1} my={3}>
        {title}
      </Heading>
      <Heading size={'sm'} color={'gray.700'}>
        Starting from ${actualPrice.toLocaleString('en-US')}
      </Heading>
    </GridItem>
  );
};

export default ProductCard;
