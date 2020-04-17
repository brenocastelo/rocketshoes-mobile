import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    { Home },
    {
      defaultNavigationOptions: {
        header: () => <Header />,
      },
    }
  )
);

export default Routes;
