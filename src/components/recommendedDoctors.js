import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';


const RecommendedDoctors = () => {
    const navigation = useNavigation();

    const doctorsData = [
        {
            id: '1',
            name: 'د. حسن سلام',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب القلب',
            description: 'طبيب قلب ذو خبرة مع التركيز على صحة القلب.',
        },
        {
            id: '2',
            name: 'د. حسن رائد',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب العيون',
            description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
        },
        {
            id: '3',
            name: 'د. علي محمد',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب حنجرة ',
            description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
        },
        {
            id: '4',
            name: 'د. محمد فراس',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب اسنان ',
            description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
        },
        {
            id: '5',
            name: 'د. حسن سلام',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب القلب',
            description: 'طبيب قلب ذو خبرة مع التركيز على صحة القلب.',
        },
        {
            id: '6',
            name: 'د. حسن رائد',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب العيون',
            description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
        },
        {
            id: '7',
            name: 'د. علي محمد',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب حنجرة ',
            description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
        },
        {
            id: '8',
            name: 'د. محمد فراس',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب اسنان ',
            description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
        },
        {
            id: '9',
            name: 'د. حسن رائد',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب العيون',
            description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
        },
        {
            id: '10',
            name: 'د. علي محمد',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب حنجرة ',
            description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
        },
        {
            id: '11',
            name: 'د. محمد فراس',
            imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
            specialty: 'طبيب اسنان ',
            description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
        },
    ];

    const renderRecommendedDoctors = ({ item }) => (
        <TouchableOpacity style={styles.doctorItem} onPress={() => navigation.navigate('doctorDetails')}>
            <Image source={item.imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>الأطباء الموصى بهم</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={doctorsData}
                keyExtractor={(item) => item.id}
                renderItem={renderRecommendedDoctors}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gray3,
        marginBottom: 15
    },
    doctorItem: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginVertical: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    specialty: {
        fontSize: 16,
        color: 'gray',
        marginVertical: 2
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
})

export default RecommendedDoctors
