import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import TextCustomize from './src/components/text/TextCustomize';
import { LinearGradient } from 'expo-linear-gradient';
export default function A1({ navigation }) {
    console.log('🚀 ~ App ~ navigation:', navigation);
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[
                    '#C7F4F6',
                    '#C7F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#D1F4F6',
                    '#E5F4F5',
                    '#E5F4F5',
                    '#E5F4F5',
                    '#E5F4F5',
                    '#E5F4F5',
                    '#00CCF9',
                    'transparent',
                ]}
                style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
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
                        We will help you to grow your business using online
                        server
                    </Text>
                </View>
                <View style={styles.flexContainer}>
                    <View>
                        <Pressable style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </Pressable>
                    </View>
                </View>
                <view style={styles.style4}>
                    <Text style={styles.style5}>HOW WE WORK?</Text>
                </view>
            </LinearGradient>
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
    },
    style4: {
        display: 'flex',
        width: '302px',
        height: '53px',
        marginTop: '21px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    style5: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign: 'center',
    },
    buttonStyle: {
        width: 119,
        height: 48,
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
