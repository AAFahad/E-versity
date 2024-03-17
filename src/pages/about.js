import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Layout from '../components/Layout';

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Heading
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Layout>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
        //   px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading  color={'white'}>About US</Heading>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
            //   fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              >
              We are providing all university information in one platform
              These may help you to choose a best university
            </Text>
            <Stack direction={'row'}>
            <Button bgColor={'#ff7200'} color={'white'} _hover={{ bg: "white", color: "black" , border: "1px", borderColor: '#ff7200' }}>Log in</Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      </Layout>
    );
  }