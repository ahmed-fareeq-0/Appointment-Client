import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/theme';

const { width, height } = Dimensions.get("window");

const OnBoardingScreen = () => {

    const navigation = useNavigation();

    const Square = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
            backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
        } else {
            backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }

        const styles = {
            square: {
                width: 10,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
                borderRadius: 3,
            }
        }
        return (
            <View style={styles.square} />
        );
    };

    const handleDone = () => {
        navigation.navigate("welcome")
    }

    const pages = [
        {
            backgroundColor: "#fbfbfb",
            image: (
                <View style={styles.lottie}>
                    <LottieView source={require('../../assets/animation_lmq0t7s3.json')} autoPlay loop />
                </View>
            ),
            title: 'موعد',
            titleStyles: {
                fontWeight: 'bold',
                fontSize: 35,
            },
            subtitle: 'موعد تطبيق لتسهيل عملية حجز المواعيد مع الاطباء في كربلاء',
        },
        {
            backgroundColor: "#fbfbfb",
            image: (
                <View style={styles.lottie}>
                    <LottieView source={require('../../assets/animation_lmpzuxzk.json')} autoPlay loop />
                </View>
            ),
            title: 'موعد',
            titleStyles: {
                fontWeight: 'bold',
                fontSize: 35,
            },
            subtitle: 'موعد تطبيق لتسهيل عملية حجز المواعيد مع الاطباء في كربلاء',

        },
    ]

    const doneBtnComponent = () => {
        return (
            <TouchableOpacity style={{ padding: 15 }} onPress={handleDone}>
                <Text style={[styles.buttonText, { color: '#000' }]}>تم</Text>
            </TouchableOpacity>
        )
    }
    const nextBtnComponent = ({ ...props }) => {
        return (
            <TouchableOpacity style={{ padding: 15 }} {...props}>
                <Text style={styles.buttonText}>التالي</Text>
            </TouchableOpacity>
        )
    }
    const skipBtnComponent = () => {
        return (
            <TouchableOpacity style={{ padding: 15 }} onPress={handleDone}>
                <Text style={styles.buttonText}>تخطي</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Onboarding
                DotComponent={Square}
                containerStyles={{ paddingHorizontal: 15 }}
                bottomBarHighlight={false}
                DoneButtonComponent={doneBtnComponent}
                NextButtonComponent={nextBtnComponent}
                SkipButtonComponent={skipBtnComponent}
                pages={pages}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    lottie: {
        width: width * 0.9,
        height: width,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default OnBoardingScreen