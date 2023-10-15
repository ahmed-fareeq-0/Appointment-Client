import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { colors, sizes } from '../constants/theme';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={[styles.title, { color: colors.blue2 }]}>منظور جديد لصحتك</Text>
                    <Text style={{ color: colors.gray2, textAlign: 'center', paddingHorizontal: 25 }}>تابع حالتك المرضية وحالة عائلتك الصحية من مواعيد, أدوية, في منصة واحدة!</Text>
                </View>

                <View style={styles.lottie}>
                    <LottieView source={require('../../assets/animation_lmsxza0j.json')} autoPlay loop />
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
                        <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                            <Text style={[styles.btnText, { color: colors.white }]}>
                                تسجيل الدخول
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { borderWidth: 0.4, borderColor: 'black', color: colors.black }]} onPress={() => navigation.navigate('signUp')}>
                        <Text style={styles.btnText}>
                            حساب المستخدم
                        </Text>
                    </TouchableOpacity >
                    
                    <TouchableOpacity style={[styles.termsOfServices]} onPress={() => navigation.navigate('termsOfService')}>
                        <Text style={styles.textServices}>شروط الخدمة</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapper: {
        flexDirection: "column",
        alignItems: 'center',
    },
    lottie: {
        width: width * 0.9,
        height: width,
        // marginVertical: 10
    },
    title: {
        fontSize: sizes.h1,
        marginTop: 30,
        marginBottom: 10,
        fontWeight: 'bold'

    },
    btn: {
        paddingHorizontal: sizes.padding * 4,
        height: sizes.base * 3,
        borderRadius: sizes.radius,
        marginVertical: sizes.padding / 3,
        justifyContent: 'center',

    },
    termsOfServices: {
        marginVertical: sizes.padding / 3,
        alignSelf: 'center',
    },
    textServices: {
        color: colors.gray,
        fontSize: sizes.caption
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center'
    }

})