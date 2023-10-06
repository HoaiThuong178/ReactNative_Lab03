import { View, Text, Pressable } from 'react-native';
import React from 'react';

const ScreenActions = [
    {
        name: 'fistScreen',
        title: 'First Screen',
    },
    {
        name: '1_a',
        title: '1_a',
    },
];

const Home = ({ navigation }) => {
    const handleNavigate = (name) => {
        navigation.navigate(name);
    };

    return (
        <View>
            {ScreenActions.map((screen) => (
                <Pressable onPress={() => handleNavigate(screen.name)}>
                    <Text>{screen.title}</Text>
                </Pressable>
            ))}
        </View>
    );
};

export default Home;
