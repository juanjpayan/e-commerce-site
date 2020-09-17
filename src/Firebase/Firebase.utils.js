import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDs-tth1dPf7DNooYsJry4qgBLPtg9oins',
	authDomain: 'e-commerce-b63d9.firebaseapp.com',
	databaseURL: 'https://e-commerce-b63d9.firebaseio.com',
	projectId: 'e-commerce-b63d9',
	storageBucket: 'e-commerce-b63d9.appspot.com',
	messagingSenderId: '844047109942',
	appId: '1:844047109942:web:79c6bbc1f0b27129ad6d97'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
