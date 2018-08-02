import firebase from 'react-native-firebase';
export default class MapsService {
	static async loadVoluntters() {
		let volunteersRef = firebase.database().ref('volunteers');
		let response = await volunteersRef.once('value');
		return response;
	}
}
