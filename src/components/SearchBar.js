import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchText, onSearchTextChange, onSearchSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            clearButtonMode="while-editing"
            placeholder="Search"
            value={searchText}
            // onChangeText={value => onSearchTextChange(value)}
            // onEndEditing={() => onSearchSubmit()}
            onChangeText={onSearchTextChange}
            onEndEditing={onSearchSubmit}
          />
        </View>
    )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',//'#F0EEEE',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 15,
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
