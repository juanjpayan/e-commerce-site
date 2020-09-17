import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import signInAndSignUp from './Pages/SignIn-SignUp/signIn- signUp';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				})
			} else {
				setCurrentUser({currentUser: userAuth})
			}
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);
	return (
		<>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={signInAndSignUp} />
			</Switch>
		</>
	);
}

export default App;
