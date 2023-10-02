import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const MainHeader = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            <Ionicons name="notifications" size={28} color={colors.blue2} style={{ marginTop: 10 }} onPress={() => navigation.navigate("notifications")} />
            <Text style={styles.title}>Appointment</Text>
            <Ionicons name="menu-sharp" size={28} color={colors.blue2} style={{ marginTop: 10 }} onPress={() => navigation.openDrawer()} />
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