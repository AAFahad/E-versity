import React from 'react';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {/* <Container maxW={'6xl'}> */}
        {children}
        <Footer/>
        {/* </Container> */}
      
    </>
  )
}

export default Layout;