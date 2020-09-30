import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import SignInAndSignUp from './Pages/SignIn-SignUp/signIn- signUp';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/UserAction';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/User/UserSelector';
import Checkout from './Pages/Checkout/Checkout';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
					})
				})
			} else {
				setCurrentUser({userAuth})
			}
		});

		return () => {
			unsubscribeFromAuth();
		};
	}, []);
	return (
		<>
			<Header/>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={Checkout} />
				<Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)} />
			</Switch>
		</>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
