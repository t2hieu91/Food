import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultItem from '../components/ResultItem';
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal={true}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
							<ResultItem result={item} />
						</TouchableOpacity>
					)
				}}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 10,
	}
});

export default withNavigation(ResultList);
