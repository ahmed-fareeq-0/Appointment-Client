import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterOrganism from '../components/organisms/RegisterOrganism';
import { colors, sizes } from '../constants/theme';

const RegisterTemplate = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: sizes.base * 3 }}>
                <Text style={styles.title}>تسجيل حساب جديد</Text>
                <Text style={styles.descTitle}>مرحبا بك عرفنا بنفسك اكثر من خلال تسجيل معلوماتك الشخصية.</Text>
            </View>
            <RegisterOrganism />
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

export default RegisterTemplate;
