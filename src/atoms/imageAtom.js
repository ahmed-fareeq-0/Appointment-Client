import React from 'react';
import { Image } from 'react-native';

const ImageAtom = ({ source, style }) => {
    return <Image source={source} style={style} />;
};

export default ImageAtom;