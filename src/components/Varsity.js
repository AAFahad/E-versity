import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Layout from './Layout';
import { getProductData } from '../data/product-data';
import { Box, Heading, Stack, Text, Container, Grid, GridItem, Image, Button, Divider, Center, border } from '@chakra-ui/react';
const Product = () => {

    const [varsities, setvarsities] = useState(getProductData());
    return (
        <Layout>
             <Box mt={10} mb={10}>
                    <Stack spacing={4} textAlign={'center'}>
                        <Heading fontSize={'3xl'} as="h1">University List</Heading>
                        <Text color={'gray.600'} fontSize={'xl'}>
                            All University list in one platform
                        </Text>
                    </Stack>
                </Box>
            {varsities.map((varsity, index) =>
                <Container key={index} maxW={'7xl'}>
                    <Grid p={5} templateColumns='repeat(2, 1fr)' gap={1}>
                        <GridItem p={5} w='100%' >
                            <Box
                                rounded={'lg'}
                                pos={'relative'}
                                // height={'230px'}
                                >
                                <Image
                                    rounded={'lg'}
                                    // height={230}
                                    width={480}
                                    objectFit={'cover'}
                                    src={varsity.image}
                                />
                            </Box>
                        </GridItem>
                        <GridItem p={5} w='100%' >
                            <Heading pb={3}>{varsity.title}</Heading>
                            <Text pb={3} as={'p'}>{varsity.vision}</Text>
                            <Link to={`/varsity/${varsity.id}`} className="product-button">
                              <Button bgColor={'#ff7200'} color={'white'} _hover={{ bg: "white", color: "black" , border: "1px", borderColor: '#ff7200' }}>See Details</Button>
                            </Link>
                        </GridItem>
                    </Grid>
                </Container>
            )}
        </Layout>
    );
}

export default Product;