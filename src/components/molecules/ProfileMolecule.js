import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';
import ImageAtom from '../atoms/imageAtom';

const ProfileMolecule = ({ name, email, imageSource }) => {
    return (
        <View style={styles.container}>
            <ImageAtom source={imageSource} style={styles.profileImage} />
            <TextAtom style={styles.header}>{name}</TextAtom>
            <TextAtom style={styles.subHeader}>{email}</TextAtom>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default ProfileMolecule;
