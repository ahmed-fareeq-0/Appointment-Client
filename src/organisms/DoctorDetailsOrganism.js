import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextAtom from '../atoms/textAtom';
import ImageAtom from '../atoms/imageAtom';
import DoctorInfoMolecule from '../molecules/DoctorDetailsMolecule';
import { colors, sizes } from '../constants/theme';
import MapView, { Marker } from 'react-native-maps';
import { Context } from '../context/Provider';

const DoctorDetailsOrganism = ({ doctor, handleBookAppointment }) => {

    const { openMapsApp } = useContext(Context)

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: doctor.location.latitude,
                    longitude: doctor.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: doctor.location.latitude,
                        longitude: doctor.location.longitude,
                    }}
                    title={doctor.name}
                >
                    <ImageAtom source={doctor.image} style={styles.markerImage} />
                </Marker>
            </MapView>

            <View style={styles.box}>
                <DoctorInfoMolecule doctor={doctor} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.bookButton} onPress={handleBookAppointment}>
                        <TextAtom style={styles.bookButtonText}>حجز</TextAtom>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={openMapsApp} style={styles.openMapsbutton}>
                        <TextAtom style={styles.openMapsbuttonText}>احصل على الاتجاهات</TextAtom>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    markerImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    box: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookButton: {
        backgroundColor: colors.blue2,
        paddingHorizontal: 50,
        height: sizes.base * 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    bookButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
    },
    openMapsbutton: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        height: sizes.base * 3,
        borderWidth: 1,
        borderColor: colors.blue2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    openMapsbuttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.blue2,
    },
});

export default DoctorDetailsOrganism;
