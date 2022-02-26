import React from 'react'
import { useReducer } from 'react';
import { kataReducer } from './store/kataReducer';
import { KataContext } from './store/kataContext';

export const App = () => {
  const [state, dispatch] = useReducer(kataReducer, {});
}

return (
  <KataContext.Provider value= {{state, dispatch}}>
    <h2>Kata Crud</h2>
  </KataContext.Provider>
)

