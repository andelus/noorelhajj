import React, { Component } from 'react';
import { Item, Text, Button, Icon, Input, Header, Container, Left } from 'native-base';
export default class SearchField extends Component {
	render() {
		return (
			<Header searchBar rounded>
				<Item>
					<Input placeholder="Need a doctor, guide, food ..." />
					<Icon name="ios-search" />
				</Item>
				<Button transparent>
					<Text>Search</Text>
				</Button>
			</Header>
		);
	}
}
