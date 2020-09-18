import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase.utils';
import CustomButton from '../Custom-Button/Custom-Button';
import FormInput from '../Form-Input/Form-Input';
import './Sing-Up.scss';

const SignUp = () => {
	const [ displayName, setDisplayName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmedPassword, setConfirmedPassword ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmedPassword) {
			alert("password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			createUserProfileDocument(user, { displayName });

			await createUserProfileDocument(user, { displayName });

			setDisplayName();
			setEmail();
			setPassword();
			setConfirmedPassword();
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		name === 'email' ? setEmail(value) : setPassword(value);
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmedPassword}
					onChange={handleChange}
					label="ConfirmPassword"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
