// import { Box, Flex, Heading,Text } from '@chakra-ui/react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import React from 'react'
import { IconType } from 'react-icons'


const LinkItems = [

  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

const Sidebar = () => {
  return (
    <Box     bg={useColorModeValue('white', 'gray.900')}
          borderRight="1px"
          borderRightColor={useColorModeValue('gray.200', 'gray.700')}
          w={{ base: 'full', md: 60 }}
          pos="fixed"
          h="full"
    >
    
    
      <Flex alignItems={"center"}>
        <Text  fontSize={"2xl"} fontWeight={"bold"}>Sociout</Text>
      </Flex>
      {
        LinkItems.map((el)=>{
          return <NavItem key={el.name} icon={el.icon}>{el.name}</NavItem>
        })
      }
    
    </Box>
  )
}

const NavItem = ({ icon, children,...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

export default Sidebar






// export default function SimpleSidebar() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {/* Content */}
//       </Box>
//     </Box>
//   )
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   )
// }

// interface NavItemProps extends FlexProps {
//   icon: IconType
//   children: ReactText
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Box
//       as="a"
//       href="#"
//       style={{ textDecoration: 'none' }}
//       _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Box>
//   )
// }

