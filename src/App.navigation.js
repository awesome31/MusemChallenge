import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PictureList from './screens/PictureList';
import PictureDetails from './screens/PictureDetails';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PictureList" component={PictureList} />
      <Stack.Screen name="PictureDetails" component={PictureDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
