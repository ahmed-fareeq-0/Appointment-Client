import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleNotificationsToggle = () => {
        setNotificationsEnabled((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>الاعدادات</Text>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>تشغيل الاشعارات</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={handleNotificationsToggle}
                    thumbColor="#007BFF"
                    trackColor={{ true: '#007BFF', false: 'gray' }}
                />
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>اللغة</Text>
                <TouchableOpacity onPress={() => console.log('Language pressed')}>
                    <Text style={styles.languageOption}>English</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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

export default SettingsScreen;
