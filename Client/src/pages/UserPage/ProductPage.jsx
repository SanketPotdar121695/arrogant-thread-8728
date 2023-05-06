import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productAction';
import Sidebar from './Sidebar';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from '../../components/Products/ProductCard';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Box>
      {/* <Sidebar /> */}
      <Grid
        templateColumns={'repeat(3, 1fr)'}
        justifyContent={'center'}
        alignItems={'center'}
        rowGap={6}
      >
        {products?.map((item, i) => (
          <GridItem key={item._id}>
            <ProductCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
