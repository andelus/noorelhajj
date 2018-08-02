import React, { Component } from 'react';
import { Container, Drawer } from 'native-base';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DrawerMenu from './drawerMenu';
export default class DrawerContainer extends Component {
	render() {
		closeDrawer = () => {
			this.drawer._root.close();
		};
		openDrawer = () => {
			this.drawer._root.open();
		};
		return (
			<Drawer
				ref={ref => {
					this.drawer = ref;
				}}
				content={<DrawerMenu navigator={this.navigator} />}
				onClose={() => this.closeDrawer()}
			>
				// Main View
			</Drawer>
		);
	}
}
