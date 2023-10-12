import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecommendedDoctorsMolecules from '../molecules/recommendedDoctorsMolecules';
import { Context } from '../context/Provider';
import TextAtom from '../atoms/textAtom';
import { colors } from '../constants/theme';
const RecommendedDoctorsOrganism = () => {
    const { RecommendedDoctorsData } = useContext(Context);

    const renderRecommendedDoctors = ({ item }) => (
        <RecommendedDoctorsMolecules
            name={item.name}
            specialty={item.specialty}
            description={item.description}
            imageSource={item.imageSource}
        />
    );

    return (
        <View style={styles.container}>
            <TextAtom style={styles.title}>الأطباء الموصى بهم</TextAtom>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={RecommendedDoctorsData}
                keyExtractor={(item) => item.id}
                renderItem={renderRecommendedDoctors}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gray3,
        marginBottom: 15
    },
});

export default RecommendedDoctorsOrganism;
