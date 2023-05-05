import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
 
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Banner({img1,img2}) {
    return (
      <Container maxW={'5xl'} py={12} style={{width:"100%"}}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
               img1
              }
              objectFit={'cover'}
            />
          </Flex>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                img2
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }