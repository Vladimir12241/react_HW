import { useState } from "react";

const PassworbConfirm = ({ min }) => {
	const [passCHeck, setPassCheck] = useState(true);
	const [checkPass, setCheckPass] = useState(true);
	const [pass, setPass] = useState("");
	const isValid = (value) => {
		if (value.length === 0 || value.length > min) {
			setPass(value);
			return setPassCheck(true);
		}
		setPass("");
		return setPassCheck(false);
	};
	const isMatch = (value) => {
		if (pass === value || value.length === 0) return setCheckPass(true);
		return setCheckPass(false);
	};

	return (
		<form className="Pass-Check">
			<input
				type="text"
				placeholder="Enter your password"
				onChange={(e) => {
					isValid(e.target.value);
				}}
				style={!passCHeck ? { color: "red", border: "2px solid red" } : {}}
			/>
			<input
				type="test"
				placeholder="Confirm your password"
				onChange={(e) => {
					isMatch(e.target.value);
				}}
				style={!checkPass ? { color: "red", border: "2px solid red" } : {}}
			/>
		</form>
	);
};

export default PassworbConfirm;
