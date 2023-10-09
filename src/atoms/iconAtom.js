import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const IconAtom = ({ name, size, color }) => {
    return (
        <MaterialIcons name={name} size={size} color={color} />
    );
};

export default IconAtom;
