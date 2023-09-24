import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, sizes } from './../constants/theme';
import { Header } from 'react-native-elements';


const Search = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
        console.log(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="ابحث..."
                    placeholderTextColor="#fff"
                    value={searchText}
                    onChangeText={handleSearch}
                    textAlign='right'
                />
                <TouchableOpacity>
                    <Ionicons name="search" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const SearchComponent = () => {
    return (
        <Header
            // backgroundColor='#3498db'
            backgroundColor={colors.blue2}
            // leftComponent={{ text: 'ميعاد', style: { color: '#fff', fontSize: 24, fontWeight: 'bold', width: width / 2 } }}
            // leftComponent={<Ionicons name="notifications" size={28} color="#fff" style={{ marginTop: 5 }} />}
            centerComponent={Search}
            containerStyle={{
                height: sizes.padding * 5 - 10
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        // borderColor: '#fff',
        // borderWidth: 1,
        // borderRadius:10
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal:8
    },
    input: {
        flex: 1,
        height: 40,
        color: '#fff',
        fontSize: 16,
    },
});

export default SearchComponent;
