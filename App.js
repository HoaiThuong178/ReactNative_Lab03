import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import FirstScreen from './FirstSreen.js';
import Home from './screens/Home.js';
import A1 from './A1.js';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: 'fistScreen',
        component: FirstScreen,
    },
    {
        name: 'Home',
        component: Home,
    },
    {
        name: '1_a',
        component: A1,
    },
];

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {screens.map((screen) => (
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
