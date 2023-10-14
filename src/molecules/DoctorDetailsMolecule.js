import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';
import ImageAtom from '../atoms/imageAtom';
import { colors } from '../constants/theme';
import IconAtom from '../atoms/iconAtom';

const DoctorDetailsMolecule = ({ doctor }) => {
    return (
        <View style={styles.container}>
            <ImageAtom source={doctor.image} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
                <TextAtom style={styles.doctorName}>{doctor.name}</TextAtom>
                <View style={styles.tttt}>
                    <IconAtom name="location-arrow" size={16} color={colors.blue2} />
                    <TextAtom style={styles.doctorAddress}>{doctor.address}</TextAtom>
                </View>
                <View style={styles.tttt}>
                    <IconAtom name="stethoscope" size={16} color={colors.blue2} />
                    <TextAtom style={styles.doctorDetails}>{doctor.specialization}</TextAtom>
                </View>
                <View style={styles.tttt}>
                    <IconAtom name="phone" size={16} color={colors.blue2} />
                    <TextAtom style={styles.doctorDetails}>{doctor.phone}</TextAtom>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    doctorInfo: {
        flex: 1,
    },
    doctorName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tttt: {
        flexDirection: 'row',
        marginVertical: 6,
    },
    doctorAddress: {
        fontSize: 16,
        marginLeft: 5,
        color: '#555',
    },
    doctorDetails: {
        fontSize: 16,
        marginLeft: 5,
        color: '#777',
        marginBottom: 2,
    },
});

export default DoctorDetailsMolecule;
