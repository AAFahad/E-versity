import React from 'react';
import '../index.css';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
       <div className='nav_section'>
         <div className="navbar">
            <div className="icon">
                <Link to="/"><img src='./logo.png'/></Link>
                
            </div>

            <div className="menu">
                <ul> 
                    <Box mr={4}>
                    <Link to="/about">ABOUT</Link>
                    </Box>
                    {/* <Box mr={3}>
                    <Link to="/service">SERVICE</Link>
                    </Box> */}
                    <Box mr={4}>
                    <Link to="/varsity">UNIVERSITY LIST</Link>
                    </Box>
                    {/* <Box mr={4}>
                    <Link to="/contact">CONTACT</Link>
                    </Box> */}

                   
                    
                   
                </ul>     
            </div>

            <div className="search">
                <input className="srch" type="search" id='inputID' name="" placeholder="Search University"/>
                <button className="btn">Search</button>
            </div>

        </div> 
       </div>
    );
};

export default Navbar;
