import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultItem = ({ result }) => {
	return (
		<View>
			<Text> {result.name} |</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default ResultItem;
