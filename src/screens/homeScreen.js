import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import React from 'react'
import HeaderComponent from '../components/headerComponent';

const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>home screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})