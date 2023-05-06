import { Box, Text, Image, Stack, Heading } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ title, image, price }) => {
  return (
    <Box>
      <Stack>
        <Image
          src={image}
          alt={title}
          roundedTop='lg'
          boxSize='300px'
          m={'auto'}
          objectFit='contain'
          border='2px solid red'
        />
        <Heading size={'md'} noOfLines={1}>
          {title}
        </Heading>
        {/* <Text>Price: ${}</Text> */}
      </Stack>
    </Box>
  );
};

export default ProductCard;
