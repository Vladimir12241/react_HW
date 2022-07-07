import "./App.css";
import { useState } from "react";

const LoginForm = ({ onLog }) => {
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
	const emailCheck = new RegExp(/^\S+@\S+\.\S+/);
	const passCheck = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
	return (
		<form className="App-form">
			<span>Email:</span>
			<input
				type="text"
				placeholder="Enter your Email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			></input>
			<span>{email?.match(emailCheck) && "It's OK"}</span>
			<span>Password:</span>
			<input
				type="password"
				placeholder="Enter your PASS"
				onChange={(e) => setPass(e.target.value)}
				value={pass}
			></input>
			<span>
				{pass?.match(passCheck)
					? "Looks OK"
					: "Length not less than 8 characters! Must include at least 1 Lowercase 1 Uppercase 1 digit 1 special symbol!"}
			</span>

			<button
				type="button"
				disabled={!email?.match(emailCheck) || !pass?.match(passCheck)}
				onClick={() => onLog({ email, pass })}
			>
				Submit
			</button>
		</form>
	);
};

function App() {
	return (
		<div className="App">
			<LoginForm onLog={({ email, pass }) => alert(`${email}, ${pass}`)} />
		</div>
	);
}

export default App;
