import React, { Component } from 'react';
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Text,
	Item,
	Input,
	Label,
	Form
} from 'native-base';
import VolunteersService from './volunteers/service';
import SearchField from './search/';
export default class MainShell extends Component {
	getVolunteers() {
		console.log('clicked');
	}
	render() {
		return (
			<Container>
				<SearchField />
				<Container>{this.props.children}</Container>
				<Footer>
					<FooterTab>
						<Button onPress={this.getVolunteers.bind(this)} primary>
							<Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Find Help</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
