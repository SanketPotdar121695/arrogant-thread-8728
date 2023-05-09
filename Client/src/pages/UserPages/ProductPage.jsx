import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../redux/products/productAction';
import Sidebar from '../../components/Products/Sidebar';
import { Box, Grid } from '@chakra-ui/react';
import ProductCard from '../../components/Products/ProductCard';
import Loading from '../../utils/Loading';
import Error from '../../utils/Error';
import Pagination from '../../components/Products/Pagination';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, totalProductCount } = useSelector(
    (store) => store.products
  );
  const [activePage, setActivePage] = useState(1);

  const location = useLocation();

  const [searchParams] = useSearchParams();
  const [productPerPage, setProductPerPage] = useState(
    Number(searchParams.get('_limit')) || 6
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

  const resetFilter = () => {
    setCategory([]);
    setPrice_gte(undefined);
    setPrice_lte(undefined);
  };

  // const filteredProducts = products.filter((item, index) => {
  //   if (activePage === Math.ceil(products.length / limit)) {
  //     return index === activePage * limit - limit;
  //   } else {
  //     return (
  //       index === activePage * limit - limit || index === activePage * limit - 1
  //     );
  //   }
  // });

  console.log(totalProductCount);

  useEffect(() => {
    const allParams = {
      params: {
        category,
        // model,
        order,
        q,
        sort,
        price_lte,
        price_gte,
        _page: currentPage > 1 ? currentPage : 1,
        _limit: productPerPage
      }
    };
    // console.log(allParams);
    dispatch(getProducts(allParams));
  }, [
    category,
    order,
    q,
    sort,
    price_lte,
    price_gte,
    currentPage,
    productPerPage
  ]);

  useEffect(() => {
    let navQuery = searchParams.get('q');
    if (navQuery !== '' && navQuery !== q) {
      setQ(navQuery);
    }

    let navCategory = searchParams.getAll('category');
    if (
      navCategory.length &&
      JSON.stringify(navCategory) !== JSON.stringify(category)
    ) {
      setCategory(navCategory);
    }

    if (navCategory.length === 0 && category.length !== 0) {
      searchParams.delete('category');
      setCategory(navCategory);
    }

    if (navQuery === '' && q !== '') {
      searchParams.set('q', '');
      setQ('');
    }

    let navPage = Number(searchParams.get('_page'));
    if (navPage !== 0 && navPage !== currentPage) {
      setCurrentPage(navPage);
    }
  }, [location]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Box>
      <Box
        display={{ base: 'block', sm: 'flex' }}
        justifyContent='space-between'
        alignContent={'center'}
        gap={4}
      >
        <Box
          // position={{ base: 'relative', sm: 'fixed' }}
          position={'relative'}
          w={{ base: '100%', sm: '50%', lg: '25%' }}
          left={0}
          right={0}
        >
          <Sidebar
            productCategoryOnchange={changeCategory}
            price={`${price_gte}, ${price_lte}`}
            productPriceOnchange={changePrice}
            category={category}
            resetFilter={resetFilter}
          />
        </Box>

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

      <Pagination
        onChange={paginate}
        totalCount={totalProductCount}
        currentPage={currentPage}
        pageSize={productPerPage}
        onPageChange={paginate}
      />
    </Box>
  );
};
