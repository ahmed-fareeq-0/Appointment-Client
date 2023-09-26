import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MainHeader from '../components/mainHeader';
import Specialties from '../components/specialtiesComponent';
import RecommendedDoctors from '../components/recommendedDoctors';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <MainHeader />
            <View style={{ paddingHorizontal: 24, paddingVertical: 24 }}>
                <Text style={styles.title}>التخصصات</Text>
            </View>
            <Specialties />
            <RecommendedDoctors />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})