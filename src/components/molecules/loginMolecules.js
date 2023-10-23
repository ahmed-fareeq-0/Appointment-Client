import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import InputAtom from '../atoms/inputAtom'
import ButtonAtom from '../atoms/buttonAtom';
import { colors, sizes } from '../../constants/theme';
// import { Context } from '../../context/Provider';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginMolecules = ({ button }) => {
    const navigation = useNavigation();
    const { loading, error } = useSelector(state => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('الحقول يجب ملؤها');
            return;
        }

        try {
            const response = await dispatch(signIn({ email, password, user_type: "patient" }));

            if (response.payload && response.payload.result && response.payload.result.token) {
                const token = response.payload.result.token;
                try {
                    await AsyncStorage.setItem('userToken', JSON.stringify(token));
                    Alert.alert('ممتاز!', "تم التسجيل الدخول بنجاح", [
                        {
                            text: 'OK',
                            style: 'cancel',
                        },
                    ]);
                    console.log('saved token');
                } catch (error) {
                    console.error('حدث خطأ أثناء حفظ التوكن:', error);
                }
            } else {
                Alert.alert('هناك مشكلة', 'بيانات تسجيل الدخول غير صحيحة أو لم يتم العثور على التوكن', [
                    {
                        text: 'OK',
                        style: 'cancel',
                    },
                ]);
            }
        } catch (error) {
            console.error('حدث خطأ أثناء تسجيل الدخول:', error);
        }
    };


    return (
        <View style={styles.wrapper}>
            <InputAtom
                placeholder='البريد الإلكتروني أو رقم الهاتف'
                value={email}
                onChangeText={setEmail}
                iconName="person"
                size={24}
                color="black"
            />
            <InputAtom
                placeholder='كلمة المرور'
                value={password}
                onChangeText={setPassword}
                iconName="remove-red-eye"
                size={24}
                color="black"
                secureTextEntry
            />
            {
                loading ?
                    (
                        <ButtonAtom button="انتظر من فضلك" onPress={handleLogin} />
                    )
                    :
                    (
                        <ButtonAtom button="تسجيل دخول" onPress={handleLogin} />
                    )
            }
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

export default LoginMolecules;

