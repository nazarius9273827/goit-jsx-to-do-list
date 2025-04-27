import React from 'react';
import { Input } from '../styles';

const Filter = ({ value, onChange }) => (
  <Input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Фільтр завдань"
  />
);

export default Filter;
