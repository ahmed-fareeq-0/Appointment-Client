import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';
import TouchableOpacityAtom from '../atoms/touchableOpacityAtom';
import { useNavigation } from '@react-navigation/native';

const RecommendedDoctorsMolecules = ({ name, specialty, description, imageSource }) => {

    const Navigation = useNavigation();

    return (
        <TouchableOpacityAtom style={styles.container} onPress={() => Navigation.navigate("doctorDetails")}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <TextAtom style={styles.name}>{name}</TextAtom>
                <TextAtom style={styles.specialty}>{specialty}</TextAtom>
                <TextAtom style={styles.description}>{description}</TextAtom>
            </View>
        </TouchableOpacityAtom>
    );
}

const styles = StyleSheet.create({
    container: {
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
});

export default RecommendedDoctorsMolecules;
