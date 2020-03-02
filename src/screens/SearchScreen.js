import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [ searchText , setSearchText ] = useState('');
  const [ results, setResults ] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchText,
          location: 'san jose'
        }
      }).catch(error => console.log('error=',error));

      setResults(response.data.businesses);
    } catch (err) {
      console.log('err=', err);
      setErrorMessage('Something went wrong');
    }
  };

  return (
      <View>
        <SearchBar
          searchText={searchText}
          // onSearchTextChange={ newValue => setSearchText(newValue)}
          // onSearchSubmit={() => searchApi()}
          onSearchTextChange={setSearchText}
          onSearchSubmit={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found: {results.length} results</Text>
      </View>
  )
};

export default SearchScreen;
