import React from 'react';
import { Input } from 'react-native-elements';
import Icon from './iconAtom';

const InputAtom = ({ placeholder, value, onChangeText, iconName, color, size, secureTextEntry }) => {
    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            rightIcon={<Icon name={iconName} size={size} color={color} />}
            numberOfLines={2}
            textAlign='right'
        />
    );
};

export default InputAtom;

