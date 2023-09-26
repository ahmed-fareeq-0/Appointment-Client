import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';

const MainHeader = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            <Ionicons name="menu-sharp" size={28} color={colors.blue2} style={{ marginTop: 10 }} />
            <Text style={styles.title}>Appointment</Text>
            <Ionicons name="notifications" size={28} color={colors.blue2} style={{ marginTop: 10 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blue2
    },
});

export default MainHeader;