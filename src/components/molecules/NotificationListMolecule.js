import React from 'react';
import { FlatList } from 'react-native';
import NotificationItemAtom from '../atoms/NotificationItemAtom';

const NotificationListMolecule = ({ notifications }) => {
    return (
        <FlatList
            data={notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <NotificationItemAtom message={item.message} />}
        />
    );
};

export default NotificationListMolecule;
