import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);

	const item = navigation.getParam('item');
	const id = item.id;

	const getResultDetail = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResultDetail(id)
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />
				}}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 30,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
		marginVertical: 15,
	},
	image: {
		height: 200,
		width: 320,
		borderRadius: 10,
		marginBottom: 15,
	}
});

export default ResultsShowScreen;
