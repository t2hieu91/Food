import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hook/useResults";
import ResultList from '../components/ResultList';

const SearchScreen = ({ navigation }) => {
  console.log(navigation);

  const [ searchText , setSearchText ] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price
    })
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        // onSearchTextChange={ newValue => setSearchText(newValue)}
        onSearchTextChange={setSearchText}
        onSearchSubmit={() => searchApi(searchText)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  )
};

export default SearchScreen;
