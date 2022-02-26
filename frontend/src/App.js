import React from 'react'
import { useReducer } from 'react';
import { kataReducer } from './store/kataReducer';
import { KataContext } from './store/kataContext';
import { HomePage } from './components/HomePage';

import './assets/sass/style.scss';

export const App = () => {
  const [state, dispatch] = useReducer(kataReducer, {});


  return (
    <KataContext.Provider value= {{state, dispatch}}>
      <HomePage/>
    </KataContext.Provider>
  )

}

