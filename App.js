/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import MainShell from './noorelhajj/main';
import Maps from './noorelhajj/maps';
import DrawerContainer from './components/drawer/drawerContainer';
import DrawerMenu from './components/drawer/drawerMenu';
const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

const MainView = props => (
	<MainShell>
		<Maps openDrawer={props.openDrawer} />
	</MainShell>
);
const DrawerContainerHOC = DrawerContainer(MainView);
type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<StyleProvider style={getTheme(commonColor)}>
				<DrawerContainerHOC menu={<DrawerMenu />} />
			</StyleProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
