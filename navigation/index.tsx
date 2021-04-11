import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import TutorialScreen from '../screens/TutorialScreen';
import GraphOverviewScreen from '../screens/GraphOverviewScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="GraphOverviewScreen" component={GraphOverviewScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();