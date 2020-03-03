import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultItem from '../components/ResultItem';

const ResultList = ({ title, results }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal={true}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return <ResultItem result={item} />
				}}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default ResultList;
