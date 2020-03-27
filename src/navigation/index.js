import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Dashboard from './dashboard';

const AuthStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode={'none'}>
        <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'Signup'} component={Signup} />
        <AuthStack.Screen name={'Dashboard'} component={Dashboard} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
