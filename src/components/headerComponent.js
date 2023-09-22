import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';


const HeaderComponent = () => {

    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}

export default HeaderComponent

const styles = StyleSheet.create({
    header: {
        // backgroundColor:'red',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 90,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginHorizontal: 10
    },
});