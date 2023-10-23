import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import InputAtom from '../atoms/inputAtom'
import ButtonAtom from '../atoms/buttonAtom';
import { colors, sizes } from '../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/slices/userSlice';
import { useNavigation } from '@react-navigation/native';


const RegisterMolecules = () => {

    const navigation = useNavigation();

    const { loading, error } = useSelector(state => state.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (!name || !email || !phone || !password || !confirmPassword) {
            Alert.alert('الحقول يجب ملؤها');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('تأكد من أن كلمة المرور متطابقة');
            return;
        }

        try {
            const response = await dispatch(signUp({ name, email, phone, password, user_type: "patient" }));
            if (response.payload.error) {
                Alert.alert('خطأ', response.payload.message);
            } else {

                Alert.alert('ممتاز!', "تم التسجيل بنجاح", [
                    {
                        text: 'OK',
                        onPress: () => { navigation.navigate("signIn") },
                        style: 'cancel',
                    },
                ]);

            }
        } catch (error) {
            console.log('خطأ آخر: ', error);
            Alert.alert('خطأ', 'حدث خطأ أثناء التسجيل');
        }
    };


    return (
        <View style={styles.wrapper}>
            <InputAtom
                placeholder='الأسم الثلاثي'
                value={name}
                onChangeText={setName}
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
                iconName="remove-red-eye"
                size={24}
                color="black"
                secureTextEntry
            />
            <InputAtom
                placeholder='التأكد من كلمة المرور'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                iconName="remove-red-eye"
                size={24}
                color="black"
                secureTextEntry
            />
            {
                loading ?
                    (
                        <ButtonAtom button="انتظر من فضلك" onPress={handleRegister} />
                    )
                    :
                    (
                        <ButtonAtom button="تسجيل" onPress={handleRegister} />
                    )
            }
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
