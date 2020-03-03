import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async (text) => {
		console.log('Hi, Here');
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
