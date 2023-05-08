import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

const Pagination = ({
  perPage,
  activePage,
  productsLength,
  handlePageChange
}) => {
  const totalPages = Math.ceil(productsLength / perPage);

  return (
    <Flex justifyContent='center' alignItems='center' gap='4' p='6'>
      {activePage !== 1 ? (
        <Button onClick={() => handlePageChange(activePage - 1)}>Prev</Button>
      ) : (
        <Box px='8' py='4' />
      )}
      {[...Array(totalPages)].map((item, index) => (
        <Button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          colorScheme={activePage === index + 1 ? 'cyan' : 'gray'}
        >
          {index + 1}
        </Button>
      ))}
      {activePage !== totalPages ? (
        <Button onClick={() => handlePageChange(activePage + 1)}>Next</Button>
      ) : (
        <Box px='8' py='4' />
      )}
    </Flex>
  );
};

export default Pagination;
