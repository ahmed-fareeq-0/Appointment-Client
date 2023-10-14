import React from 'react';
import { Switch } from 'react-native';

const SwitchAtom = ({ value, onValueChange, thumbColor, trackColor }) => {
    return (
        <Switch
            value={value}
            onValueChange={onValueChange}
            thumbColor={thumbColor}
            trackColor={trackColor}
        />
    );
};

export default SwitchAtom;