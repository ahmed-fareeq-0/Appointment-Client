import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecommendedDoctorsMolecules from '../molecules/recommendedDoctorsMolecules';
import TextAtom from '../atoms/textAtom';
import { colors } from '../../constants/theme';
const RecommendedDoctorsOrganism = () => {

    const RecommendedDoctorsData = [
        {
          id: '1',
          name: 'د. حسن سلام',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب القلب',
          description: 'طبيب قلب ذو خبرة مع التركيز على صحة القلب.',
        },
        {
          id: '2',
          name: 'د. حسن رائد',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب العيون',
          description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
        },
        {
          id: '3',
          name: 'د. علي محمد',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب حنجرة ',
          description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
        },
        {
          id: '4',
          name: 'د. محمد فراس',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب اسنان ',
          description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
        },
        {
          id: '5',
          name: 'د. حسن سلام',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب القلب',
          description: 'طبيب قلب ذو خبرة مع التركيز على صحة القلب.',
        },
        {
          id: '6',
          name: 'د. حسن رائد',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب العيون',
          description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
        },
        {
          id: '7',
          name: 'د. علي محمد',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب حنجرة ',
          description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
        },
        {
          id: '8',
          name: 'د. محمد فراس',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب اسنان ',
          description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
        },
        {
          id: '9',
          name: 'د. حسن رائد',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب العيون',
          description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
        },
        {
          id: '10',
          name: 'د. علي محمد',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب حنجرة ',
          description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
        },
        {
          id: '11',
          name: 'د. محمد فراس',
          imageSource: require('../../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
          specialty: 'طبيب اسنان ',
          description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
        },
      ];

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
