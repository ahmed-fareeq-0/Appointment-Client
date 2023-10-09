import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import InputAtom from '../atoms/inputAtom'
import ButtonAtom from '../atoms/buttonAtom';
import { colors, sizes } from '../constants/theme';
import { Context } from '../context/Provider';
import { useNavigation } from '@react-navigation/native';


const LoginMolecules = () => {
    const navigation = useNavigation();
    const { usernameSignIn, setUsernameSignIn, passwordSignIn, setPasswordSignIn } = useContext(Context)

    return (
        <View style={styles.wrapper}>
            <InputAtom
                placeholder='البريد الإلكتروني أو رقم الهاتف'
                value={usernameSignIn}
                onChangeText={setUsernameSignIn}
                iconName="person"
                size={24}
                color="black"
            />
            <InputAtom
                placeholder='كلمة المرور'
                value={passwordSignIn}
                onChangeText={setPasswordSignIn}
                iconName="remove-red-eye"
                size={24}
                color="black"
                secureTextEntry
            />
            <ButtonAtom />
            <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('signUp')}>
                <Text style={styles.textSignup}>لا تمتلك حساب؟ سجل من هنا.</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: sizes.padding * 5,
        justifyContent: 'center',
        padding: 16,
        // backgroundColor:'blue'
    },
    signup: {
        marginVertical: sizes.padding / 3,
        alignSelf: 'center',
    },
    textSignup: {
        color: colors.gray,
        fontSize: sizes.caption
    },
})

export default LoginMolecules;
