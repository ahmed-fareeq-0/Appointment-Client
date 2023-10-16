import React from 'react';
import { View, FlatList } from 'react-native';

const DoctorsListOrganism = ({ doctorsData, renderItem }) => {
    return (
        <View>
            <FlatList
                data={doctorsData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
};



export default DoctorsListOrganism;
