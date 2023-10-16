import React, { useContext } from "react";
import DoctorsListOrganism from "../components/organisms/DoctorsListOrganism";
import DoctorItemMolecule from "../components/molecules/DoctorItemMolecule";
import { Context } from "../context/Provider";


const DoctorListTemplate = () => {
    const { doctorsData } = useContext(Context);

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
