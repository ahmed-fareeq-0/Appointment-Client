import React, { useContext } from "react";
import DoctorsListOrganism from "../components/organisms/DoctorsListOrganism";
import DoctorItemMolecule from "../components/molecules/DoctorItemMolecule";
import { Context } from "../context/Provider";


const DoctorListTemplate = () => {

    const doctorsData = [
        {
            id: '1',
            name: 'د. علي محمد حسين',
            specialty: 'اخصائي قلب',
            location: 'كربلاء حي الحسين',
            image: require('../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'), // تحديث مع مسار الصورة الخاصة بك
        },
        {
            id: '2',
            name: 'د. محمد عبد السلام',
            specialty: 'اخصائي جلدية',
            location: 'كربلاء الاسكان',
            image: require('../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
        },
    ]

    const renderDoctorItem = ({ item }) => (
        <DoctorItemMolecule
            name={item.name}
            specialty={item.specialty}
            location={item.location}
            image={item.image}
            onPress={() => navigation.navigate('doctorDetails')}
        />
    );

    return <DoctorsListOrganism doctorsData={doctorsData} renderItem={renderDoctorItem} />;
};

export default DoctorListTemplate;
