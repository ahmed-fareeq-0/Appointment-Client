import React from 'react';
import { StyleSheet } from 'react-native';
import ImageAtom from '../atoms/imageAtom';
import TextAtom from '../atoms/textAtom';
import TouchableOpacityAtom from '../atoms/touchableOpacityAtom';

const SpecialtiesMolecule = ({ item }) => {
    return (
        <TouchableOpacityAtom style={styles.item} onPress={() => console.log('ok')}>
            <ImageAtom source={item.img} style={{ width: 30, height: 30 }} />
            <TextAtom style={styles.title}>{item.name}</TextAtom>
        </TouchableOpacityAtom>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default SpecialtiesMolecule;
