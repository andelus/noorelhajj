import firebase from 'react-native-firebase';
export default class VolunteerService {
	static async getVolunteers() {
		var volunteersRef = firebase.database().ref('volunteers');
		volunteersRef
			.once('value')
			.then(snapshot => {
				console.log(snapshot.val());
			})
			.catch(err => {
				cosnole.log(err);
			});
	}
}
