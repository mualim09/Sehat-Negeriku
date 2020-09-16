import React, { useState, useRef } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Dimensions,
	RefreshControl,
} from 'react-native';
import { Tab, TabView } from '@ui-kitten/components';

import TopNav from '../components/topnav/TopNav';
import Rubrik from './rubrik/Rubrik';

const { width } = Dimensions.get('window');

export default function MediaScreen({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const refresh = useRef();

	function onRefresh() {
		setRefreshing(true);
		refresh.current.refresh();
	}
	return (
		<View style={styles.container}>
			<ScrollView
				stickyHeaderIndices={[1]}
				refreshControl={
					<RefreshControl
						colors={['#16B3AC']}
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{/* Top Nav */}
				<TopNav navigation={navigation} />
				<TabView selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
					<Tab title="Video" />
					<Tab title="Foto" />
				</TabView>
				{selectedIndex == 0 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="category"
						slug="video"
						navigation={navigation}
					/>
				)}
				{selectedIndex == 1 && (
					<Rubrik
						refreshing={refreshing}
						setRefreshing={setRefreshing}
						ref={refresh}
						rubrik="category"
						slug="foto"
						navigation={navigation}
					/>
				)}
			</ScrollView>
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
	tabContainer: {
		minHeight: 64,
	},
});
