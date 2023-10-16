import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';

const ProfileOrganism = ({ infoData }) => {
    return (
        <View style={styles.infoContainer}>
            {infoData.map((item, index) => (
                <View key={index} style={styles.infoItem}>
                    <TextAtom style={styles.label}>{item.label}</TextAtom>
                    <TextAtom style={styles.value}>{item.value}</TextAtom>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
    },
});

export default ProfileOrganism;
