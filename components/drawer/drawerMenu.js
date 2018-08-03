import React, { Component } from 'react';
import { Container, Header, List, ListItem, Text, Drawer, Content, Separator } from 'native-base';
import { StyleSheet, View, Image } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2A3C48',
		height: '100%'
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderWidth: 2,
		marginTop: 10,
		borderColor: '#4EB8CE'
	},
	profile: {
		alignItems: 'center',
		marginBottom: 5
	},
	title: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
		margin: 5
	},
	subtitle: {
		color: '#fff',
		fontSize: 13
	},
	listItemSep: {
		backgroundColor: '#324855',
		height: 60,
		padding: 10,
		marginLeft: 0,
		borderWidth: 0
	},
	listItem: {
		marginLeft: 30
	},
	jobTitle: {
		color: '#89C23F',
		fontWeight: 'bold'
	},
	listItemText: {
		color: '#fff',
		fontSize: 13,
		fontWeight: 'bold'
	},
	listItemSmText: {
		color: '#fff',
		fontSize: 11
	},
	lang: {
		marginLeft: 10,
		width: 30,
		height: 30
	}
});
const DrawerMenu = props => {
	console.log('props', props);

	return (
		<View style={style.container}>
			<View
				style={{
					justifyContent: 'center',
					alignSelf: 'center'
				}}
			>
				<Image
					style={style.avatar}
					source={{
						uri: props.volunteer.image
					}}
				/>
			</View>
			<View style={style.profile}>
				<Text style={style.title}>{props.volunteer.firstName + ' ' + props.volunteer.lastName} </Text>
				<Text style={style.subtitle}>{props.volunteer.country}</Text>
			</View>
			<View>
				<ListItem style={style.listItemSep} bordered>
					<Text style={style.listItemSmText}>I am a</Text>
					<Text style={style.jobTitle}> {props.volunteer.job}</Text>
				</ListItem>
				<ListItem style={style.listItemSep} bordered>
					<Text style={style.listItemSmText}>I can help in</Text>
				</ListItem>

				<ListItem style={style.listItem}>
					<Text style={style.listItemSmText}>First Aid</Text>
				</ListItem>

				<ListItem style={style.listItem}>
					<Text style={style.listItemSmText}>Guidance</Text>
				</ListItem>
				<ListItem style={style.listItem}>
					<Text style={style.listItemSmText}>Provide Food</Text>
				</ListItem>
			</View>
			<View>
				<ListItem style={style.listItemSep} bordered>
					<Text style={style.listItemText}>I speak</Text>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<Image style={style.lang} source={require('../../assets/ar.png')} />
						<Image style={style.lang} source={require('../../assets/en.png')} />
						<Image style={style.lang} source={require('../../assets/fr.png')} />
					</View>
				</ListItem>
			</View>
		</View>
	);
};

export default DrawerMenu;
