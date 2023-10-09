import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginOrganism from './../organisms/loginOrganism';
import { colors, sizes } from '../constants/theme';

const LoginTemplate = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: sizes.base * 3 }}>
                <Text style={styles.title}>تسجيل دخول</Text>
                <Text style={styles.descTitle}>مرحبا بك مرة اخرى من هنا يمكنك تسجيل الدخول.</Text>
            </View>
            <LoginOrganism />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor:'red'
        // justifyContent:'center'
    },
    title: {
        color: colors.blue2,
        fontWeight: 'bold',
        fontSize: sizes.h1,
        textAlign: 'center',
        marginBottom: sizes.spacing
    },
    descTitle: {
        fontSize: sizes.small,
        // padding: sizes.spacing,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.gray3,
    }
})

export default LoginTemplate;
