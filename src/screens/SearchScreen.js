import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hook/useResults";

const SearchScreen = () => {
  const [ searchText , setSearchText ] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
      <View>
        <SearchBar
          searchText={searchText}
          // onSearchTextChange={ newValue => setSearchText(newValue)}
          onSearchTextChange={setSearchText}
          onSearchSubmit={() => searchApi(searchText)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found: {results.length} results</Text>
      </View>
  )
};

export default SearchScreen;
