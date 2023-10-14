import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';
import ImageAtom from '../atoms/imageAtom';
import AboutMolecule from '../molecules/AboutMolecule';
import { colors } from '../constants/theme';

const AboutOrganism = () => {
    return (
        <View style={styles.container}>
            <ImageAtom
                source={require('../../assets/Screenshot_2023-09-22_213847-removebg-preview.png')}
                style={styles.appIcon}
            />
            <TextAtom style={styles.header}>حول التطبيق</TextAtom>
            <AboutMolecule />
            <TextAtom style={styles.version}>App Version: 1.0.0</TextAtom>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbfbfb',
    },
    appIcon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.black,
    },
    version: {
        fontSize: 16,
        color: '#888',
        marginTop: 30,
    },
});

export default AboutOrganism;
