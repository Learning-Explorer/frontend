import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CardScreen from './containers/CardScreen';

import './assets/styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    {/* Aqui va el ruter */}
    <CardScreen /> 
  </Provider>,
  document.getElementById('root')
);