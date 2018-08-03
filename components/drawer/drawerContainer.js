import React, { Component } from 'react';
import { View, Container } from 'native-base';
import SideMenu from 'react-native-side-menu';
import DrawerMenu from './drawerMenu';
const DrawerContainer = WarppedComponenet => {
	class DrawerContainerHOC extends Component {
		constructor(props) {
			super(props);
			this.state = {
				isDrawerOpen: false,
				selectedVolunteer: {}
			};
		}
		openDrawer(data) {
			this.setState({
				isDrawerOpen: !this.state.isDrawerOpen,
				selectedVolunteer: data
			});
		}
		render() {
			return (
				<Container>
					<SideMenu
						isOpen={this.state.isDrawerOpen}
						menu={<DrawerMenu volunteer={this.state.selectedVolunteer} />}
						menuPosition="left"
					>
						<WarppedComponenet openDrawer={this.openDrawer.bind(this)} />
					</SideMenu>
				</Container>
			);
		}
	}
	return DrawerContainerHOC;
};

export default DrawerContainer;
