import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';
import SwitchAtom from '../atoms/SwitchAtom';

const SettingsMolecule = ({ label, value, onValueChange, thumbColor, trackColor }) => {
    return (
        <View style={styles.settingItem}>
            <TextAtom style={styles.settingLabel}>{label}</TextAtom>
            <SwitchAtom
                value={value}
                onValueChange={onValueChange}
                thumbColor={thumbColor}
                trackColor={trackColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default SettingsMolecule;
