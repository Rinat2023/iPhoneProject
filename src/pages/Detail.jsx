import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { DUMMY_PRODUCTS } from './Products';
import { styled } from 'styled-components';
import { Button } from '../components/Button';

export const Detail = () => {
  const params = useParams();
  console.log(params);
  const productId = params.productId;
  console.log(productId);
  const currentProduct = DUMMY_PRODUCTS.find(
    (product) => product.id === productId
  );
  console.log(currentProduct);
  if (!currentProduct) {
    <Navigate to={'/products'}></Navigate>;
  }
  return (
    <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center' }}>
      <Button></Button>
      <Div>
        <img src={currentProduct.image} alt="" />
        <h1>{currentProduct.title}</h1>
        <h2>{currentProduct.price} сом</h2>
        <br />
        <p>{currentProduct.description}</p>
      </Div>
    </div>
  );
};

const Div = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 350px;
  border-radius: 20px;
  box-shadow: 1px 6px 35px 2px rgba(34, 60, 80, 0.2);
  & > img {
    width: 100%;
  }
`;
