import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCycleScreen from './src/views/AddCycleScreen';
import CycleListScreen from './src/views/CycleListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CycleList">
        <Stack.Screen name="CycleList" component={CycleListScreen} options={{ title: 'Cycle List' }} />
        <Stack.Screen name="AddCycle" component={AddCycleScreen} options={{ title: 'Add New Cycle' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
