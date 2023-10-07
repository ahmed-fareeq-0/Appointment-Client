import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../constants/theme';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Screenshot_2023-09-22_213847-removebg-preview.png')}
                style={styles.appIcon}
            />
            <Text style={styles.header}>حول التطبيق</Text>
            <Text style={styles.description}>
                مرحبًا بك في تطبيق جدولة المواعيد لدينا، رفيقك الموثوق به لإدارة مواعيد طبيبك بكل سهولة وراحة.
            </Text>
            <Text style={styles.description}>
                استمتع بتجربة طريقة سلسة للحجز وإعادة الجدولة والبقاء على اطلاع دائم بمقدمي الرعاية الصحية لديك. للحصول على أي مساعدة، يرجى التواصل معنا على ahmed.fareeq.0@gmail.com
            </Text>
            <Text style={styles.version}>App Version: 1.0.0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbfbfb',
    },
    appIcon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.black,
    },
    description: {
        fontSize: 18,
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    version: {
        fontSize: 16,
        color: '#888',
        marginTop: 30,
    },
});

export default AboutScreen;
