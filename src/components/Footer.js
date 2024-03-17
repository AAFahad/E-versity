import {
    Box,
    Container,
    Image,
    Stack,
    Text, 
    SocialButton

  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <Box bg={'white'} borderTop={'1px'} borderBottom={'1px'} borderStyle={'dotted'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Link to="/"> <Image src='./logo.png'/></Link>
         
          <Text fontSize={'18px'}>© 2022 E-varsity. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
              <FaTwitter size={'22px'} />
              <FaYoutube size={'22px'}/>
              <FaInstagram size={'22px'}/>
          </Stack>
        </Container>
      </Box>
    );
  }
