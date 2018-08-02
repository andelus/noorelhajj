import React, { Component } from 'react';
import { Container } from 'native-base';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapsService from './service';
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});
export default class Maps extends Component {
	state = {
		volunteers: []
	};
	componentDidMount() {
		MapsService.loadVoluntters()
			.then(res => {
				this.setState({
					volunteers: res.val()
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 21.423221,
						longitude: 39.826291,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}}
				>
					{this.state.volunteers.map(volunteer => (
						<Marker
							coordinate={{ latitude: volunteer.lat, longitude: volunteer.long }}
							title={volunteer.name}
							description={'volunteer1'}
						/>
					))}
				</MapView>
			</View>
		);
	}
}
