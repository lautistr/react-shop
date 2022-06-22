import React from 'react';
import '@styles/ForgotPassword.scss';

import roundLogo from '@verole/round_B&W.png';

const ForgotPassword = () => {
	return (
		<div className="ForgotPassword">
			<div className="ForgotPassword-container">
				<img src={roundLogo} alt="logo" className="ForgotPassword-logo" />
				<h1 className="title">Forgot  your password?</h1>
				<p className="subtitle">Don't worry! It happens to the best of us.
					Enter your email or username to request a password reset link.
				</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input
						type="submit"
						value="Confirm"
						className="primary-button login-button"
					/>
				</form>
			</div>
		</div>
	);
}

export default ForgotPassword;