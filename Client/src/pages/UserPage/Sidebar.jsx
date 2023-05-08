import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Stack,
  CheckboxGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Flex,
  Button
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Sidebar = ({
  productCategoryOnchange,
  category,
  productPriceOnchange,
  price,
  // resetFilter
}) => {
  const [canClear, setCanClear] = useState(true);

  const categories = [
    { name: 'mac', displayName: 'Mac' },
    { name: 'iPhone', displayName: 'iPhone' },
    { name: 'ipad', displayName: 'iPad' },
    { name: 'watch', displayName: 'Watch' },
    { name: 'AirPods', displayName: 'AirPods' },
    { name: 'tv', displayName: 'TV & Home' }
  ];

  const clearFilter = () => {
    if (category.length !== 0 || price !== 'undefined,undefined') {
      productCategoryOnchange([]);
      productPriceOnchange('*');
      // resetFilter();
    }
  };

  /********** determine if we can use clear filter button ******************/

  useEffect(() => {
    if (category.length === 0 && price === 'undefined, undefined') {
      setCanClear(true);
    } else {
      setCanClear(false);
    }
  }, [category.length, price]);

  return (

    <Stack
    t={0}
      bgColor='white'
      padding='10px'
      spacing='10px'
      color='lf.black'
      w={{ base: '100%', sm: '50%', lg: '25%' }}
      position={"sticky"}
    >
      <Flex alignItems='center' justifyContent='space-between' gap={2}>
        <Text fontSize={16} fontWeight={400} textAlign={'left'}>
          Filter By:
        </Text>
        <Button
          color='white'
          bg={'red.400'}
          _hover={{ bg: 'red.500' }}
          _active={{ bg: 'red.600' }}
          // colorScheme='red'
          isDisabled={canClear}
          onClick={clearFilter}
        >
          Clear Filter
        </Button>
      </Flex>

      <Box h={'auto'}>
        <Accordion allowMultiple>
          {/* start hers */}

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={400}>
                        Category
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup
                    colorScheme='teal'
                    value={category}
                    onChange={productCategoryOnchange}
                  >
                    <Stack spacing={1} direction={'column'}>
                      {categories.map((category) => {
                        return (
                          <Checkbox
                            value={category.name}
                            key={Date() + Math.random() + category.name}
                          >
                            {category.displayName}
                          </Checkbox>
                        );
                      })}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={400}>
                        Price
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup
                    colorScheme='teal'
                    value={price}
                    onChange={productPriceOnchange}
                  >
                    <Stack spacing={1} direction={'column'}>
                      <Radio value='100,1000'>0 - 99</Radio>
                      <Radio value='100,1000'>100 - 499</Radio>
                      <Radio value='1000,5000'>500 - 999</Radio>
                      <Radio value='5000,10000'>1,000 - 1,999</Radio>
                      <Radio value='10000,15000'>2,000 - 2,999</Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          {/* ends here */}
        </Accordion>
      </Box>
    </Stack>
  );
};

export default Sidebar;
