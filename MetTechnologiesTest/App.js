
import  React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Src/Navigations/AppNavigator';

const App = () => {

  return (
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
    
  );
};

export default App;
