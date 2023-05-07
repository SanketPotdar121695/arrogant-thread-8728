import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../../redux/products/productAction';
import Sidebar from './Sidebar';
import { Box, Grid } from '@chakra-ui/react';
import ProductCard from '../../components/Products/ProductCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.products);

  const [searchParams] = useSearchParams();
  const [productPerPage, setProductPerPage] = useState(
    Number(searchParams.get('_limit')) || 10
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('_page')) || 1
  );
  const [q, setQ] = useState(searchParams.get('q'));
  const [sort, setSort] = useState(searchParams.get('_sort') || undefined);
  const [order, setOrder] = useState(searchParams.get('_order') || undefined);
  const [category, setCategory] = useState(searchParams.getAll('category'));

  const [price_lte, setPrice_lte] = useState(
    searchParams.get('price_lte') ? searchParams.get('price_lte') : undefined
  );
  const [price_gte, setPrice_gte] = useState(
    searchParams.get('price_gte') ? searchParams.get('price_gte') : undefined
  );

  const paginate = (value) => {
    setCurrentPage(Number(value));
  };

  const changeSort = (value) => {
    const splitedValue = value.split(',');
    setSort(splitedValue[0]);
    setOrder(splitedValue[1]);
    setCurrentPage(1);
  };

  const changePrice = (value) => {
    if (value === '*') {
      setPrice_gte(undefined);
      setPrice_lte(undefined);
      setCurrentPage(1);
    } else {
      const splitedValue = value.split(',');
      setPrice_gte(splitedValue[0]);
      setPrice_lte(splitedValue[1]);
      setCurrentPage(1);
    }
  };

  const changeCategory = (value) => {
    if (value === '*') {
      setCategory([]);
      setCurrentPage(1);
    } else {
      setCategory(value);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    const allParams = {
      params: {
        category,
        order,
        q,
        sort,
        price_lte,
        price_gte
      }
    };
    console.log(allParams);
    dispatch(getProducts(allParams));
  }, [category, order, q, sort, price_lte, price_gte]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Box
      display={{ base: 'block', sm: 'flex' }}
      justifyContent='space-between'
      alignContent={'center'}
      gap={4}
    >
      <Sidebar
        productCategoryOnchange={changeCategory}
        price={`${price_gte}, ${price_lte}`}
        productPriceOnChange={changePrice}
        category={category}
      />

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        }}
        justifyContent={'center'}
        alignItems={'center'}
        columnGap={3}
        rowGap={12}
      >
        {products?.map((item, i) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </Grid>
    </Box>
  );
};
