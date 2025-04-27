import React from 'react';
import { InfoContainer } from '../styles';

const Info = ({ total, completed }) => (
  <InfoContainer>
    <p>Усього: {total}</p>
    <p>Виконано: {completed}</p>
  </InfoContainer>
);

export default Info;
