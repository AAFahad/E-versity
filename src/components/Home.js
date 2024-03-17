import React from 'react';
import Navbar  from './Navbar';
import '../index.css';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <div className="main">
              <Navbar/> 
              <Content/>
        </div>
        <Footer/>
       
        {/* <Footer/> */}
        {/* <About /> */}
        </>
    );
};

export default Home;