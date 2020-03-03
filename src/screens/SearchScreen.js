import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hook/useResults";
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [ searchText , setSearchText ] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price
    })
  };

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
        <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </View>
  )
};

export default SearchScreen;
