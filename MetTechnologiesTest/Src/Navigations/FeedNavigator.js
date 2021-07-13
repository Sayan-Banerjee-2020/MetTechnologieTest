import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/index';
const Stack = createStackNavigator();

export default class FeedNavigator extends Component {

    render() {
        return (
            <>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="home" component={Home} initialRouteName="home" />
                </Stack.Navigator>
            </>
        )
    }
}