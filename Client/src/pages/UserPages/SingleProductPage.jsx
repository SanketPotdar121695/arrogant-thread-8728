import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const product = products.filter((item) => item._id == id);

  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
