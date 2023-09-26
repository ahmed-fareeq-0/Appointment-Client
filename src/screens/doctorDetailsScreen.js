import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import { colors, sizes } from '../constants/theme';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DoctorDetailsScreen = () => {
    const navigation = useNavigation()
    const doctor = {
        name: 'د. علي حسن ',
        image: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
        address: 'حي الحسين, شارع المشجر',
        location: {
            latitude: 32.606111,
            longitude: 44.059430,
        },
        specialization: 'طبيب عام',
        bio: 'دكتور خبير في علاج الأمراض المزمنة والعناية بصحة العائلة.',
        phone: '1234567890',
    };

    const handleBookAppointment = () => {
        console.log('صفحة الحجز');
        navigation.navigate("appointmentBooking")
    };

    const openMapsApp = () => {
        const { latitude, longitude } = doctor.location;
        const url = `https://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`;
        Linking.openURL(url);
    };

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
                    <Image source={doctor.image} style={styles.markerImage} />
                </Marker>

            </MapView>

            <View style={styles.header}>
                <Image source={doctor.image} style={styles.doctorImage} />
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>{doctor.name}</Text>
                    <Text style={styles.doctorAddress}>الموقع :{doctor.address}</Text>
                    <Text style={styles.doctorDetails}>الاختصاص: {doctor.specialization}</Text>
                    <Text style={styles.doctorDetails}>الوصف: {doctor.bio}</Text>
                    <Text style={styles.doctorDetails}>رقم الهاتف: {doctor.phone}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.bookButton} onPress={handleBookAppointment}>
                <Text style={styles.bookButtonText}>حجز</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openMapsApp} style={styles.openMapsbutton} >
                <Text style={styles.openMapsbuttonText}>احصل على الاتجاهات</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 25,
        // marginTop: 50,
        // borderRadius: 8,
        // borderBottomEndRadius: 0,
        // borderBottomStartRadius: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        // marginHorizontal: 16
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
    doctorAddress: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    doctorDetails: {
        fontSize: 16,
        color: '#777', // لون النص الفاتح
        marginBottom: 2,
    },
    map: {
        flex: 1,
    },
    markerImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    bookButton: {
        backgroundColor: colors.blue2,
        // paddingHorizontal: sizes.padding * 4,
        height: sizes.base * 3,
        // borderRadius: sizes.radius,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        // marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookButtonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
    openMapsbutton: {
        backgroundColor: colors.white,
        // paddingHorizontal: sizes.padding * 4,
        height: sizes.base * 3,
        // borderRadius: sizes.radius,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        // marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    openMapsbuttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.blue2
    }
});

export default DoctorDetailsScreen;
