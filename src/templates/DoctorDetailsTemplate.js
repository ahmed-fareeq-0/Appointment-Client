import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import DoctorDetailsOrganism from '../organisms/DoctorDetailsOrganism';
import { Context } from '../context/Provider';

const DoctorDetailsTemplate = () => {
    const navigation = useNavigation();
    const { doctor } = useContext(Context)

    const handleBookAppointment = () => {
        console.log('صفحة الحجز');
        navigation.navigate("appointmentBooking")
    };

    return <DoctorDetailsOrganism doctor={doctor} handleBookAppointment={handleBookAppointment} />;
};

export default DoctorDetailsTemplate;
