// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const DoctorsList = () => {
//   const navigation = useNavigation();

//   const doctorsData = [
//     {
//       id: '1',
//       name: 'د. علي محمد حسين',
//       specialty: 'اخصائي قلب',
//       location: 'كربلاء حي الحسين',
//       image: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'), // تحديث مع مسار الصورة الخاصة بك
//     },
//     {
//       id: '2',
//       name: 'د. محمد عبد السلام',
//       specialty: 'اخصائي جلدية',
//       location: 'كربلاء الاسكان',
//       image: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
//     },
//   ]

//   const renderDoctorItem = ({ item }) => (
//     <TouchableOpacity style={styles.doctorItem} onPress={() => navigation.navigate('doctorDetails')}>
//       <View style={styles.doctorInfo}>
//         <Text style={styles.doctorName}>{item.name}</Text>
//         <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
//         <Text style={styles.doctorLocation}>{item.location}</Text>
//       </View>
//       <Image source={item.image} style={styles.doctorImage} />
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={doctorsData}
//       keyExtractor={(item) => item.id}
//       renderItem={renderDoctorItem}
//       contentContainerStyle={styles.listContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 16,
//   },
//   doctorItem: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   doctorImage: {
//     width: 75,
//     height: 75,
//     borderRadius: 40,
//     marginRight: 16,
//   },
//   doctorInfo: {
//     flex: 1,
//   },
//   doctorName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   doctorSpecialty: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 4,
//   },
//   doctorLocation: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 4,
//   },
//   doctorBio: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default DoctorsList;


import React from 'react';
import { View, StyleSheet } from 'react-native';
import DoctorListTemplate from '../templates/DoctorsListTemplates';

const DoctorsListComponent = () => {
  return (
    <View style={styles.container}>
      <DoctorListTemplate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fbfbfb'
  },
});

export default DoctorsListComponent;

