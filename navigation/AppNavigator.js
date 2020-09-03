import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Media from '../screens/Media';
import Search from '../screens/Search';
import Saved from '../screens/Saved';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#16B3AC',
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontWeight: 'bold',
								marginBottom: 5,
								color: focused ? '#16B3AC' : 'rgb(143, 155, 179)',
								fontSize: 10,
							}}
						>
							Home
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={'home'} />
					),
				}}
			/>
			<Tab.Screen
				name="Media"
				component={Media}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontWeight: 'bold',
								marginBottom: 5,
								color: focused ? '#16B3AC' : 'rgb(143, 155, 179)',
								fontSize: 10,
							}}
						>
							Media
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={'film'} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved"
				component={Saved}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontWeight: 'bold',
								marginBottom: 5,
								color: focused ? '#16B3AC' : 'rgb(143, 155, 179)',
								fontSize: 10,
							}}
						>
							Saved
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={'bookmark'} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Stacks = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<Stack.Screen name="Main" component={Tabs} />
			<Stack.Screen name="Search" component={Search} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
};
export default () => {
	return (
		<NavigationContainer>
			<Stacks />
		</NavigationContainer>
	);
};
