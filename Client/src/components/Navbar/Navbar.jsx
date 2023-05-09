// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from '@chakra-ui/react';
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <>
//     <Box bg={"#fafafa"}>
//       <Flex
//         bg={useColorModeValue('white', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}
//         minH={'60px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}>
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}>
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//           <Text
//             textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//             fontFamily={'heading'}
//             color={useColorModeValue('gray.800', 'white')}>
//             Logo
//           </Text>

//           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={'flex-end'}
//           direction={'row'}
//           spacing={6}>
//           <Button
//             as={'a'}
//             fontSize={'sm'}
//             fontWeight={400}
//             variant={'link'}
//             href={'#'}>
//             Sign In
//           </Button>
//           <Button
//             as={'a'}
//             display={{ base: 'none', md: 'inline-flex' }}
//             fontSize={'sm'}
//             fontWeight={600}
//             color={'white'}
//             bg={'pink.400'}
//             href={'#'}
//             _hover={{
//               bg: 'pink.300',
//             }}>
//             Sign Up
//           </Button>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//      </>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200');
//   const linkHoverColor = useColorModeValue('gray.800', 'white');
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

//   return (
//     <Stack direction={'row'} spacing={4} ml={20}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={'hover'} placement={'bottom-start'}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? '#'}

//                 fontSize={'sm'}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: 'none',
//                   color: linkHoverColor,
//                 }}>
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={'xl'}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={'xl'}
//                 minW={'sm'}>
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={'group'}
//       display={'block'}
//       p={2}
//       rounded={'md'}
//       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//       <Stack direction={'row'} align={'center'} >
//         <Box>
//           <Text
//             transition={'all .3s ease'}
//             _groupHover={{ color: 'pink.400' }}
//             fontWeight={500}>
//             {label}
//           </Text>
//           <Text fontSize={'sm'}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={'all .3s ease'}
//           transform={'translateX(-10px)'}
//           opacity={0}
//           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//           justify={'flex-end'}
//           align={'center'}
//           flex={1}>
//           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       p={4}
//       display={{ md: 'none' }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? '#'}
//         justify={'space-between'}
//         align={'center'}
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text
//           fontWeight={600}
//           color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>

//   );
// };

// const NAV_ITEMS= [
//   {
//     label: 'Store',
//     href: '/store',
//     children: [
//       {
//         label: 'Explore Design Work',
//         subLabel: 'Trending Design to inspire you',

//       },
//       {
//         label: 'New & Noteworthy',
//         subLabel: 'Up-and-coming Designers',

//       },
//     ],
//   },
//   {
//     label: 'Mac',
//     href:"#",
//     children: [
//       {
//         label: 'Job Board',
//         subLabel: 'Find your dream design job',
//         href: '#',
//       },
//       {
//         label: 'Freelance Projects',
//         subLabel: 'An exclusive list for contract work',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'iPad',
//     href: '#',
//   },
//   {
//     label: 'iPhone',
//     href: '#',
//   },
//   {
//       label: 'Watch',
//       href: '#',
//     },

//     {
//       label: 'AirPods',
//       href: '#',
//     },
//     {
//       label: 'TV & HOME',
//       href: '#',
//     },
//     {
//       label: 'Entertainment',
//       href: '#',
//     },
//     {
//       label: 'Accessories',
//       href: '#',
//     },

// ];

import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import { NavbarList } from './NavbarList';
import logo from '../../assets/logo.png';
import { Button, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { logout } from '../../redux/LoginReducer/authAction';
import { useDispatch, useSelector } from 'react-redux';

export const Navbar = () => {
  const [select, setSelect] = useState('');

  const dispatch = useDispatch();
  const { isAuth, username } = useSelector((store) => store.authReducer);

  $(document).on('mouseover', '.showDown,.headerDropDown', function () {
    $('.headerDropDown').addClass('active');
    // setSelect("");
  });

  $(document).on('mouseover', '.showDown', function () {
    setSelect('');
  });

  $(document).on('click', '.Navham', () => {
    $('header').toggleClass('active');
  });

  $(document).on('click', '.naveLinks', function () {
    $('.headerDropDown').removeClass('active');
    $('header').removeClass('active');
  });

  //
  $(document).on('mouseout', '.showDown,.headerDropDown', function () {
    $('.headerDropDown').removeClass('active');
    // setSelect("");
  });

  // for cart section in navbars
  const handleSelect = () => {
    setSelect('bag');
    $('.headerDropDown').toggleClass('active');
  };
  // For search section in navbar
  function handleSearch() {
    setSelect('search');
    $('.headerDropDown').toggleClass('active');
  }

  return (
    <>
      <header className='header'>
        <div className='Navham'></div>
        <div className='icons'>
          <Link className='naveLinks' to='/'>
            {/* <i className="fa fa-bolt"></i> */}
            <img className='nav_logo' src={logo} alt='logo' />
          </Link>
          <Link className='showDown' to='/store'>
            Store
          </Link>
          <Link className='showDown' to='/store?category=ipad'>
            iPad
          </Link>
          <Link className='showDown' to='/store?category=mac'>
            Mac
          </Link>
          <Link className='showDown' to='/store?category=iPhone'>
            iPhone
          </Link>
          <Link className='showDown' to='/store?category=watch'>
            Watch
          </Link>
          <Link className='showDown' to='/store?category=AirPods'>
            AirPods
          </Link>
          <Link className='showDown' to='/store?category=tv'>
            <Text display={'inline'} noOfLines={1}>
              TV & Home
            </Text>
          </Link>
          <Link className='showDown'>Entertainment</Link>
          <Link className='showDown'>Accessories</Link>

          <Link to='/bag' onClick={handleSearch}>
            <i className='fa fa-search'></i>
          </Link>
          <Link onClick={handleSelect}>
            <svg
              height='48'
              viewBox='0 0 17 48'
              width='17'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z'></path>
            </svg>
          </Link>

          {!isAuth ? (
            <NavLink to='/login'>
              <Button size={'sm'} colorScheme={'messenger'}>
                Signup/Login
              </Button>
            </NavLink>
          ) : (
            <Menu>
              <MenuButton as={Button}>
                <Text noOfLines={1}>
                  Welcome{' '}
                  <Text
                    display={'inline'}
                    _hover={{
                      color: 'blue.500',
                      textDecoration: 'underline'
                    }}
                  >
                    {username}
                  </Text>
                </Text>
              </MenuButton>
              <MenuList>
                <Button
                  colorScheme={'messenger'}
                  onClick={() => dispatch(logout())}
                >
                  Log out
                </Button>
              </MenuList>
            </Menu>
          )}
        </div>
      </header>

      <div className='headerDropDown'>
        {/* {select ? <NavbarBag /> : <NavbarList />} */}
        {/* {select == "bag" ? <NavbarBag /> : ""}
        {select == "search" ? <NavbarSearch /> : ""} */}
        {select == '' ? <NavbarList /> : ''}
      </div>
    </>
  );
};
