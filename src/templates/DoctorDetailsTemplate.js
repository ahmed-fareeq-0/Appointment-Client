import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import DoctorDetailsOrganism from '../components/organisms/DoctorDetailsOrganism';
import { Context } from '../context/Provider';

const DoctorDetailsTemplate = () => {
    const navigation = useNavigation();
    const doctorDetails = {
        name: 'د. علي حسن',
        image: require('../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
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

    return <DoctorDetailsOrganism doctorDetails={doctorDetails} handleBookAppointment={handleBookAppointment} />;
};

export default DoctorDetailsTemplate;
