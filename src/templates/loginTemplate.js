import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginOrganism from '../components/organisms/loginOrganism';
import { colors, sizes } from '../constants/theme';

const LoginTemplate = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: sizes.base * 3 }}>
                <Text style={styles.title}>تسجيل دخول</Text>
                <Text style={styles.descTitle}>مرحبا بك مرة اخرى من هنا يمكنك تسجيل الدخول.</Text>
            </View>
            <LoginOrganism button="تسجيل الدخول" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: '1%',
    },
    title: {
        textAlign: 'center',
        marginBottom: '2%',
        fontSize: sizes.h1, // استخدام قيمة من متغير محدد مسبقًا
    },
    descTitle: {
        fontSize: sizes.small, // استخدام قيمة من متغير محدد مسبقًا
        textAlign: 'center',
        color: colors.gray3,
    }
})

export default LoginTemplate;
