import {useEffect, useState} from "react";
import yelp from "../api/yelp";

// This func moved from SearchScreen.js
export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async (text) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: text,
					location: 'san jose'
				}
			}).catch(error => console.log('error=',error));

			setResults(response.data.businesses);
		} catch (err) {
			console.log('err=', err);
			setErrorMessage('Something went wrong');
		}
	};

	// Call api search then component is first rendered
	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [searchApi, results, errorMessage];
}
