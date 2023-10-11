import React from 'react';
import { Text } from 'react-native';

const TextAtom = ({ style, children }) => {
    return <Text style={style}>{children}</Text>;
};

export default TextAtom;