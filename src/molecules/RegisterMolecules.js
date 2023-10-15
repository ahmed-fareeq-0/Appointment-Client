import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import InputAtom from '../atoms/inputAtom'
import ButtonAtom from '../atoms/buttonAtom';
import { colors, sizes } from '../constants/theme';
import { Context } from '../context/Provider';
import { useNavigation } from '@react-navigation/native';


const RegisterMolecules = () => {
    const navigation = useNavigation();
    const { username, setUsername, email, setEmail, phone, setPhone, password, setPassword, confirmPassword, setconfirmPassword, handleRegister } = useContext(Context)

    return (
        <View style={styles.wrapper}>
            <InputAtom
                placeholder='الأسم الثلاثي'
                value={username}
                onChangeText={setUsername}
                iconName="person"
                size={24}
                color="black"
            />
            <InputAtom
                placeholder='البريد الاكتروني'
                value={email}
                onChangeText={setEmail}
                iconName="email"
                size={24}
                color="black"
            />
            <InputAtom
                placeholder='رقم الهاتف'
                value={phone}
                onChangeText={setPhone}
                iconName="phone"
                size={24}
                color="black"
            />
            <InputAtom
                placeholder='كلمة المرور'
                value={password}
                onChangeText={setPassword}
                size={24}
                color="black"
                secureTextEntry
            />
            <InputAtom
                placeholder='التأكد من كلمة المرور'
                value={confirmPassword}
                onChangeText={setconfirmPassword}
                size={24}
                color="black"
                secureTextEntry
            />
            <ButtonAtom button="تسجيل" onPress={handleRegister} />
            <TouchableOpacity style={[styles.signup]} onPress={() => navigation.navigate("signIn")}>
                <Text style={styles.textSignup}> لديك حساب؟ سجل دخول .</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        // paddingVertical: sizes.padding * 5,
        // justifyContent: 'center',
        padding: 16,
    },
    signup: {
        marginVertical: sizes.padding / 3,
        alignSelf: 'center',
    },
    textSignup: {
        fontSize: sizes.caption,
        color: colors.gray,
    },
})

export default RegisterMolecules;
