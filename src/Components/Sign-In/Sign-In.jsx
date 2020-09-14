import React, { useState } from 'react';
import CustomButton from '../Custom-Button/Custom-Button';
import FormInput from '../Form-Input/Form-Input';
import './Sign-In.scss';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (evt) => {
		const { value, name } = evt.target;
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
				<CustomButton type="submit">Sign In</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
