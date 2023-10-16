import React from 'react';
import { TouchableOpacity } from 'react-native';

const TouchableOpacityAtom = ({ children, onPress, style }) => {
    return <TouchableOpacity onPress={onPress} style={style}>{children}</TouchableOpacity>;
}

export default TouchableOpacityAtom;
