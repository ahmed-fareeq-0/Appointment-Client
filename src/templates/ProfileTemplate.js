import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileMolecule from '../components/molecules/ProfileMolecule';
import ProfileOrganism from '../components/organisms/ProfileOrganism';

const ProfileTemplate = () => {

    const profileData = {
        name: 'احمد فريق',
        email: 'ahmed@example.com',
        imageSource: require('../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
        infoData: [
            { label: 'العمر', value: '30' },
            { label: 'العنوان', value: 'كربلاء' },
            { label: 'رقم الهاتف', value: '07715503646' },
        ],
    };
    return (
        <View style={styles.container}>
            <ProfileMolecule
                name={profileData.name}
                email={profileData.email}
                imageSource={profileData.imageSource}
            />
            <ProfileOrganism infoData={profileData.infoData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#fbfbfb',
    },
});

export default ProfileTemplate;
