import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import TextCustomize from './src/components/text/TextCustomize';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='cover'
                style={styles.circle}
                source={require('./assets/Ellipse 8.png')}
            ></Image>

            <View style={styles.style}>
                <TextCustomize style={styles.style1}>
                    GROW YOUR BUSINESS
                </TextCustomize>
            </View>
            <View style={styles.style2}>
                <Text style={styles.style3}>
                    We will help you to grow your business using online server
                </Text>
            </View>
            <View style={styles.flexContainer}>
                <View>
                    <Pressable style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Pressable>
                </View>
                <View>
                    <Button
                        title='SIGN UP'
                        color='#E3C000'
                        style={styles.buttonStyle}
                    ></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#00CCF9',
    },
    buttonStyle: {
        width: 119,
        height: 48,
        borderRadius: '10px',
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontWeight: 700,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 45,
        width: '100%',
    },
    circle: {
        width: 140,
        height: 140,
    },
    style: {
        width: 189,
        height: 58,
        marginTop: 52,
    },
    style1: {
        fontSize: 25,
        fontWeight: 700,
        lineHeight: 29,
        textAlign: 'center',
    },
    style2: {
        width: 302,
        height: 36,
        marginTop: 52,
    },
    style3: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: '0em',
        textAlign: 'center',
    },
});
