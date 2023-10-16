import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, sizes } from '../../constants/theme';

const ButtonAtom = ({ button, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                <Text style={styles.btnText}>
                    {button}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: sizes.base * 3,
        borderRadius: sizes.radius,
        marginVertical: sizes.padding / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white,
    },
})

export default ButtonAtom;
