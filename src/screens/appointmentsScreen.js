import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import React from 'react'
import MainHeader from '../components/mainHeader';

const { width, height } = Dimensions.get("window");
const AppointmentsScreen = () => {
    return (
        <View style={styles.container}>
            <MainHeader />
            <Text>Appointments Screen</Text>
        </View>
    )
}

export default AppointmentsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
});