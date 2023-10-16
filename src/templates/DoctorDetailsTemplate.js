import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import DoctorDetailsOrganism from '../components/organisms/DoctorDetailsOrganism';
import { Context } from '../context/Provider';

const DoctorDetailsTemplate = () => {
    const navigation = useNavigation();
    const { doctorDetails } = useContext(Context)

    const handleBookAppointment = () => {
        console.log('صفحة الحجز');
        navigation.navigate("appointmentBooking")
    };

    return <DoctorDetailsOrganism doctorDetails={doctorDetails} handleBookAppointment={handleBookAppointment} />;
};

export default DoctorDetailsTemplate;
