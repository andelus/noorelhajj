import React, { Component } from 'react';
import { Form, Item, Label, Input } from 'native-base';
export default class SearchField extends Component {
	render() {
		return (
			<Form>
				<Item floatingLabel>
					<Label>Find Doctors, Guides...</Label>
					<Input />
				</Item>
			</Form>
		);
	}
}
