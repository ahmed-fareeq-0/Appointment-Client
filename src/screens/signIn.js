import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, sizes } from '../constants/theme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: sizes.base * 3 }}>
        <Text style={styles.title}>تسجيل دخول</Text>
        <Text style={styles.descTitle}>مرحبا بك مرة اخرى من هنا يمكنك تسجيل الدخول.</Text>
      </View>
      <View style={styles.wrapper}>
        <Input
          placeholder='البريد الاكتروني او رقم الهاتف'
          value={username}
          onChangeText={setUsername}
          rightIcon={<MaterialIcons name="person" size={24} color="black" />}
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
        <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
          <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
            <Text style={styles.btnText}>
              تسجيل الدخول
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signup]} onPress={() => navigation.navigate("signUp")}>
          <Text style={styles.textSignup}> لا تمتلك حساب؟ سجل من هنا.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
    // justifyContent:'center'
  },
  wrapper: {
    paddingVertical: sizes.padding * 5,
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
    alignItems: 'center'
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