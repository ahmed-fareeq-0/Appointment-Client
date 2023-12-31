import React from 'react';
import { MaterialIcons, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

const IconAtom = ({ name, size, color }) => {
  if (name === 'person') {
    return <MaterialIcons name={name} size={size} color={color} />;
  } else if (name === 'email') {
    return <MaterialIcons name={name} size={size} color={color} />;
  } else if (name === 'phone') {
    return <FontAwesome name={name} size={size} color={color} />;
  } else if (name === "calendar") {
    return <Ionicons name={name} size={size} color={color} />;
  } else if (name === 'remove-red-eye') {
    return <MaterialIcons name={name} size={size} color={color} />;
  } else if (name === 'stethoscope') {
    return <FontAwesome name={name} size={size} color={color} />;
  } else if (name === 'stethoscope' || 'location-arrow' || 'phone') {
    return <FontAwesome5 name={name} size={size} color={color} />;
  }
  return null;
};

export default IconAtom;

