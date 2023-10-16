import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import SpecialtiesMolecules from '../molecules/SpecialtiesMolecules';
import { Context } from '../../context/Provider';

const SpecialtiesOrganism = () => {
    const { specialtiesData } = useContext(Context)
    return (
        <View>
            <FlatList
                data={specialtiesData}
                renderItem={({ item }) => <SpecialtiesMolecules item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default SpecialtiesOrganism;
