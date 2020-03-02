import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [ searchText , setSearchText ] = useState('');

  return (
      <View>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={ newValue => setSearchText(newValue)}
          onSearchSubmit={() => console.log('submit')}
        />
        <Text>{searchText} </Text>
      </View>
  )
};

export default SearchScreen;
