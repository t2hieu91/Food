import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle} />
          <TextInput
            style={styles.inputStyle}
            clearButtonMode="while-editing"
            placeholder="Search"
          />
        </View>
    )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',//'#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  }
});

export default SearchBar;
