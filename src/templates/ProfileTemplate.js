import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileMolecule from '../components/molecules/ProfileMolecule';
import ProfileOrganism from '../components/organisms/ProfileOrganism';
import { Context } from '../context/Provider';

const ProfileTemplate = () => {

    const { profileData } = useContext(Context)

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
