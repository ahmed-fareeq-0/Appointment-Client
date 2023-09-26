import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Specialties = () => {

    const specialtiesData = [
        { id: '1', name: 'الاسنان', img: require('./../../assets/tooth.png') },
        { id: '2', name: 'العيون', img: require('./../../assets/visible.png') },
        { id: '3', name: 'القلب', img: require('./../../assets/heart.png') },
        { id: '4', name: 'الاذن والحنجرة', img: require('./../../assets/deaf.png') },
        { id: '5', name: 'الجلدية', img: require('./../../assets/smallpox.png') },
    ];

    const renderSpecialties = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}>
                {/* <Ionicons name="notifications" size={30} color="#000" /> */}
                <Image source={item.img} style={{ width: 30, height: 30 }} />
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                data={specialtiesData}
                renderItem={renderSpecialties}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '15%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 10,
        width: 150,
        marginBottom: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4,
    },
})

export default Specialties
