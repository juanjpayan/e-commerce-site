import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';
import CustomButton from '../Custom-Button/Custom-Button';
import FormInput from '../Form-Input/Form-Input';

import './Sign-In.scss';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setPassword();
			setEmail();
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		name === 'email' ? setEmail(value) : setPassword(value);
	};
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput name="email" type="email" value={email} handleChange={handleChange} label="email" required />

				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
