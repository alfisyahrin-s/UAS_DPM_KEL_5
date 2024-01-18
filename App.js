import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InputKuisioner from './src/pages/InputKuisioner/index';
import HomePasien from './src/pages/Home/HomePasien/index'
import Router from './src/router';


const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
