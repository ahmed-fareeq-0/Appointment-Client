import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';
import SettingsMolecule from '../molecules/SettingsMolecule';
import TouchableOpacityAtom from '../atoms/touchableOpacityAtom';
import { Context } from '../../context/Provider';

const SettingsOrganism = () => {

    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleNotificationsToggle = () => {
        setNotificationsEnabled((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <TextAtom style={styles.header}>الاعدادات</TextAtom>
            <SettingsMolecule
                label="تشغيل الاشعارات"
                value={notificationsEnabled}
                onValueChange={handleNotificationsToggle}
                thumbColor="#007BFF"
                trackColor={{ true: '#007BFF', false: 'gray' }}
            />
            <View style={styles.settingItem}>
                <TextAtom style={styles.settingLabel}>اللغة</TextAtom>
                <TouchableOpacityAtom onPress={() => console.log('Language pressed')}>
                    <TextAtom style={styles.languageOption}>English</TextAtom>
                </TouchableOpacityAtom>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007BFF',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    settingLabel: {
        fontSize: 18,
        color: '#333',
    },
    languageOption: {
        fontSize: 18,
        color: '#007BFF',
    },
});

export default SettingsOrganism;
