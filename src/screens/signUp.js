import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, sizes } from '../constants/theme';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log('Username:', username);
    console.log('email:', email);
    console.log('phone:', phone);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: sizes.base * 3 }}>
        <Text style={styles.title}>تسجيل حساب جديد</Text>
        <Text style={styles.descTitle}>مرحبا بك عرفنا بنفسك اكثر من خلال تسجيل معلوماتك الشخصية.</Text>
      </View>
      <View style={styles.wrapper}>
        <Input
          placeholder='الأسم الثلاثي'
          value={username}
          onChangeText={setUsername}
          rightIcon={<MaterialIcons name="person" size={24} color="black" />}
          numberOfLines={2}
          textAlign='right'
        />
        <Input
          placeholder='البريد الاكتروني'
          value={email}
          onChangeText={setEmail}
          rightIcon={<MaterialIcons name="email" size={24} color="black" />}
          numberOfLines={2}
          textAlign='right'
        />
        <Input
          placeholder='رقم الهاتف'
          value={phone}
          onChangeText={setPhone}
          rightIcon={<FontAwesome name="phone" size={24} color="black" />}
          numberOfLines={2}
          textAlign='right'
        />
        <Input
          placeholder='كلمة المرور'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          rightIcon={<Ionicons name="eye-outline" size={24} color="black" />}
          numberOfLines={2}
          textAlign='right'
        />
        <Input
          placeholder='التأكد من كلمة المرور'
          value={confirmPassword}
          onChangeText={setconfirmPassword}
          secureTextEntry
          rightIcon={<Ionicons name="eye-outline" size={24} color="black" />}
          numberOfLines={2}
          textAlign='right'
        />
        <TouchableOpacity onPress={handleSignUp}>
          <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
            <Text style={styles.btnText}>
              تسجيل
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signup]} onPress={() => navigation.navigate("signIn")}>
          <Text style={styles.textSignup}> لديك حساب؟ سجل دخول .</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
    // justifyContent:'center'
  },
  wrapper: {
    justifyContent: 'center',
    padding: 16,
    // backgroundColor:'blue'
  },
  btn: {
    // paddingHorizontal: sizes.padding * 4,
    height: sizes.base * 3,
    borderRadius: sizes.radius,
    marginVertical: sizes.padding / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white
  },
  title: {
    color: colors.blue2,
    fontWeight: 'bold',
    fontSize: sizes.h1,
    textAlign: 'center',
    marginBottom: sizes.spacing
  },
  textSignup: {
    color: colors.gray,
    fontSize: sizes.caption
  },
  signup: {
    marginVertical: sizes.padding / 3,
    alignSelf: 'center',
  },
  descTitle: {
    fontSize: sizes.small,
    // padding: sizes.spacing,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.gray3,
  }
})