import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import SpecialtiesMolecules from '../molecules/SpecialtiesMolecules';

const SpecialtiesOrganism = () => {

    const specialtiesData = [
        { id: '1', name: 'الاسنان', img: require('../../../assets/tooth.png') },
        { id: '2', name: 'العيون', img: require('../../../assets/visible.png') },
        { id: '3', name: 'القلب', img: require('../../../assets/heart.png') },
        { id: '4', name: 'الاذن والحنجرة', img: require('../../../assets/deaf.png') },
        { id: '5', name: 'الجلدية', img: require('../../../assets/smallpox.png') },
      ];
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
