import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { colors, sizes } from './../constants/theme';




const { width, height } = Dimensions.get("window");
const HeaderComponent = () => {

    return (
        <Header
            // backgroundColor='#3498db'
            backgroundColor={colors.blue2}
            // leftComponent={{ text: 'ميعاد', style: { color: '#fff', fontSize: 24, fontWeight: 'bold', width: width / 2 } }}
            leftComponent={<Image source={require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg')} style={styles.headerImage} />}
            rightComponent={<Ionicons name="notifications" size={28} color="#fff" style={{marginTop:10}} />}
            containerStyle={{
                height: sizes.padding * 5 - 10,
            }}
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
        width: 45,
        height: 45,
        borderRadius: 50,
        // marginHorizontal: 10
    },
});