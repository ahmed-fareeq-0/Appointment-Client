import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import React from 'react'

const { width, height } = Dimensions.get("window");
const AppointmentsScreen = () => {
    return (
        <View>
            <Text>Appointments Screen</Text>
        </View>
    )
}

export default AppointmentsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    lottie: {
        width: width * 0.9,
        height: "70%",
    }
})