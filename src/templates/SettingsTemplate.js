import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingsOrganism from '../components/organisms/SettingsOrganism';

const SettingsTemplate = () => {
    return (
        <View style={styles.container}>
            <SettingsOrganism />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        padding: 20,
    },
});

export default SettingsTemplate;
