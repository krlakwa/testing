import React from 'react';
import {Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export  default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(reduxPromise)
    )
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};