import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../data/product-data';
import Layout from './Layout';
import { Box, Heading, Stack, Text, Container, Grid, GridItem, Image, Button, Divider, Center } from '@chakra-ui/react';
const VarsitySingle = () => {
    const { id } = useParams();
    
    const [varsity, setVarsity] = useState(null);

    useEffect(() => {
        const filtered = getProductData().filter(varsity => varsity.id == id);

        if (filtered.length) {
            setVarsity(filtered[0]);
        }
    }, []);

    return (
        <Layout>
            {
                varsity !== null &&
                <Box>
                    <Box width={'100%'} bgColor={'#ccc'} py={20}>
                    <Heading textAlign={'center'} pt={10} pb={5}>{varsity.title}</Heading>
                    <Text mb={'20px'} textAlign={'center'}> Founded: {varsity.founded}</Text>
                    </Box>
                    <Container maxW={'5xl'}>
                    
                    <Box py={16}>
                    <Text textAlign={'center'} fontSize={'28px'} fontWeight={600} py={5}>VISION</Text>
                    <Text fontSize={'18px'} as={'p'} pb={10}>{varsity.vision}</Text>
                    <Text textAlign={'center'} fontSize={'28px'} fontWeight={600} py={5}>MISSION</Text>
                    <Text fontSize={'18px'} as={'p'}>{varsity.mission}</Text>
                    </Box>
                    </Container>
                   
                    {/* <Image src={varsity.image} style={{ width: 'auto' }} alt="" /> */}
                </Box>
            }
        </Layout>
     );
}

export default VarsitySingle;