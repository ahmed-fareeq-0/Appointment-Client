import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ImageAtom from '../atoms/imageAtom'
import TextAtom from '../atoms/textAtom';
import { useNavigation } from '@react-navigation/native';


const DoctorItemMolecule = ({ name, specialty, location, image }) => {

    const Navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.doctorItem} onPress={() => Navigation.navigate("doctorDetails")}>
            <View style={styles.doctorInfo}>
                <TextAtom style={styles.doctorName}>{name}</TextAtom>
                <TextAtom style={styles.doctorSpecialty}>{specialty}</TextAtom>
                <TextAtom style={styles.doctorLocation}>{location}</TextAtom>
            </View>
            <ImageAtom source={image} style={styles.doctorImage} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    doctorItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    doctorImage: {
        width: 75,
        height: 75,
        borderRadius: 40,
        marginRight: 16,
    },
    doctorInfo: {
        flex: 1,
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    doctorSpecialty: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    doctorLocation: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
});

export default DoctorItemMolecule