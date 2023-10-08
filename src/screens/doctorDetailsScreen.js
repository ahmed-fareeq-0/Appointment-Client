import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import { colors, sizes } from '../constants/theme';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';


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



            <View style={styles.box}>
                <View style={styles.info}>
                    <Image source={doctor.image} style={styles.doctorImage} />
                    <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>{doctor.name}</Text>
                        <View style={styles.tttt}>
                            <FontAwesome5 name="location-arrow" size={16} color={colors.blue2} />
                            <Text style={styles.doctorAddress}>{doctor.address}</Text>
                        </View>
                        <View style={styles.tttt}>
                            <FontAwesome5 name="stethoscope" size={16} color={colors.blue2} />
                            <Text style={styles.doctorDetails}>{doctor.specialization}</Text>
                        </View>
                        {/* <View style={styles.tttt}>
                            <Ionicons name="information-circle-outline" size={19} color={colors.blue2} />
                            <Text style={styles.doctorDetails}>{doctor.bio}</Text>
                        </View> */}
                        <View style={styles.tttt}>
                            <FontAwesome5 name="phone" size={16} color={colors.blue2} />
                            <Text style={styles.doctorDetails}>{doctor.phone}</Text>
                        </View>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.bookButton} onPress={handleBookAppointment}>
                        <Text style={styles.bookButtonText}>حجز</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={openMapsApp} style={styles.openMapsbutton} >
                        <Text style={styles.openMapsbuttonText}>احصل على الاتجاهات</Text>
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
    info: {
        flexDirection: 'row',
        // paddingHorizontal: 16,
        // paddingVertical: 20,
        // marginHorizontal: 10,
        marginBottom: 10,
        // borderRadius: 15,
        // borderBottomEndRadius: 0,
        // borderBottomStartRadius: 0,

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
    tttt: {
        flexDirection: 'row',
        marginVertical: 6,
    },
    doctorAddress: {
        fontSize: 16,
        // marginBottom: 5,
        color: '#555',
        // textAlign: 'left'
        marginLeft: 5
    },
    doctorDetails: {
        fontSize: 16,
        color: '#777', // لون النص الفاتح
        marginBottom: 2,
        marginLeft: 5
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
        paddingHorizontal: 50,
        height: sizes.base * 3,
        borderRadius: 10,
        // borderTopEndRadius: 0,
        // borderTopStartRadius: 0,
        // marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    bookButtonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
    openMapsbutton: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        height: sizes.base * 3,
        // borderRadius: sizes.radius,
        borderWidth: 1,
        borderColor: colors.blue2,
        borderRadius: 10,
        // borderTopEndRadius: 0,
        // borderTopStartRadius: 0,
        // marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        // borderBottomEndRadius: 15,
        // borderBottomStartRadius: 15,


    },
    openMapsbuttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.blue2
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

        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    }
});

export default DoctorDetailsScreen;
