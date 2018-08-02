import React, { Component } from 'react';
import { Container, Header, List, ListItem, Text, Drawer } from 'native-base';
export default class DrawerMenu extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<List>
						<ListItem>
							<Text>Simon Mignolet</Text>
						</ListItem>
						<ListItem>
							<Text>Nathaniel Clyne</Text>
						</ListItem>
						<ListItem>
							<Text>Dejan Lovren</Text>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}
