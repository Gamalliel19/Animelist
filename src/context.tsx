import React, { createContext } from 'react';

type ProductType = {
  id: number;
  price: number;
  name: string;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [],
  shoppingCart: 0,
};

const AppContext = createContext<InitialStateType>(initialState);
