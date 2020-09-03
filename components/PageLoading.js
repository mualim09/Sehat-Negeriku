import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	Animated,
	Easing,
} from 'react-native';
import { Layout, Tab, TabView } from '@ui-kitten/components';
var _ = require('lodash');
import TopNav from '../components/TopNav';
import Slider from '../components/LoadingSlider';
import NewsCard from '../components/LoadingNewsCard';
import CategoryBar from '../components/CategoryBar';
const { width, height } = Dimensions.get('window');
const category = 0.034 * width;
export default function Page(props) {
	const { isFetched } = props;

	return (
		<View style={{ flex: 1 }}>
			<Slider isFetched={false} />

			<View style={styles.newsCardContainer}>
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
				<NewsCard isFetched={false} data={props.news} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	newsCardContainer: {
		backgroundColor: 'white',
		borderColor: '#e5e5e5',
		borderTopWidth: 1,
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 7.5,
	},
});