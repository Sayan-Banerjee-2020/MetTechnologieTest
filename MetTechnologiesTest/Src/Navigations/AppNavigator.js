import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedNavigator from './FeedNavigator';


const Stack = createStackNavigator();

export default class AppNavigator extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="home" component={FeedNavigator} initialRouteName="home"/>
              </Stack.Navigator>
        )
    }
}
