import React from 'react';
import { styled } from 'styled-components';
export const Button = () => {
  return (
    <ButtonStyle onClick={() => window.history.back()}>GO BACK</ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  padding: 10px 15px;
  background-color: #00c8cf;
  border: none;
  color: white;
`;
