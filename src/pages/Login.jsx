import React, { useRef } from 'react';
import '@styles/Login.scss';

import roundLogo from '@verole/round_B&W.png';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    }

    return (
		<div className="login">
			<div className="login-container">
				<img src={roundLogo} alt="logo" className="login-logo"/>
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="your@email.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button"
                    >
						Log in
					</button>
					<a href="/send-email">Forgot my password</a>
				</form>
				<button
					className="secondary-button signup-button"
				>
					Sign up
				</button>
			</div>
		</div >
	);
}

export default Login;