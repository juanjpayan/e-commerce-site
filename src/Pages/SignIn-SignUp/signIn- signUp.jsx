import React from 'react';
import SignIn from '../../Components/Sign-In/Sign-In';
import SignUp from '../../Components/Sign-Up/Sing-Up';
import './signIn-signUp.scss';

const signInAndSignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default signInAndSignUp;
