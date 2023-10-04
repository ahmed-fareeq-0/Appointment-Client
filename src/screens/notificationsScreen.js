import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const dummyNotifications = [
      { id: 1, message: 'تذكير بالموعد الساعة 6:30 ظهراً' },
      { id: 2, message: 'تذكير بالموعد الساعة 2:30 ظهراً' },
    ];

    setNotifications(dummyNotifications);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>الاشعارات</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fbfbfb',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF',
  },
  notificationItem: {
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#ffffff',
  },
  notificationText: {
    fontSize: 18,
    color: '#333',
  },
});

export default NotificationScreen;
