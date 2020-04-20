import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import NavigationService from './services/navigation';

import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes
      ref={ref => {
        NavigationService.setNavigator(ref);
      }}
    />
  </Provider>
);

export default App;
