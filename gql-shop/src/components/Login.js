import { useEffect } from "react";
import { useState } from "react";
import { gql } from "../data/dataGQL";
import { store, actionPromise } from "../data/promiseReducer";

const actionLogin = (login, password) => {
	const queryPromise = gql(
		"query login($login:String!, $password:String!){login(login: $login, password: $password)}",
		{
			login: login,
			password: password,
		}
	).then((data) => {
		localStorage.authToken = data.data.login;
	});
	return actionPromise("login", queryPromise);
};

const LoginForm = () => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	const [valid, setValid] = useState(false);

	useEffect(() => {
		if (pass.length < 4 || name.length < 4) return setValid(false);
		setValid(true);
	}, [pass, name]);

	return (
		<div className="Login">
			<form className="Login-Form">
				<input
					className="User-Name"
					type="text"
					onChange={(e) => setName(e.target.value)}
					placeholder="Введіть ім'я користувача"
					value={name}
				/>
				<input
					className="User-Pass"
					type={show ? "text" : "password"}
					onChange={(e) => setPass(e.target.value)}
					placeholder="Введіть пароль"
					value={pass}
					autoComplete="off"
				/>
				{valid || <label className="Pass-Notes">Ім'я та пароль не меньше 4 сиволів!</label>}
				<input type="checkbox" className="Show=Pass" onClick={() => setShow(!show)} />

				<button
					type="button"
					className="Login-btn"
					disabled={!valid}
					onClick={() => {
						store.dispatch(actionLogin(name, pass));
						console.log("NAME: ", name, " PASS: ", pass);
					}}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;

// const LoginBeforeWore = () => {

// 	gql('query login($login:String, $password:String){login(login: $login, password: $password)}', {
//     login: 'fsa12', password: '123'
//     })
//     .then(data => {
//         localStorage.authToken = data.data.login
//         console.log(data)})

// function getUserName(tok) {
// 	let splid = tok.split(".");
// 	splid = JSON.parse(atob(splid[1]));
// 	return splid.sub.login;
// }
// }

// olx data////////////////////////////////////////////////////////////
// const actionAllCategories = () => {
// 	const queryPromise = gql(
// 		backendURL,
// 		`query Cats{
//       AdFind(query:"[{}]"){
//               _id
//               title
//               price
//               images {url}
//         }
//       }`,
// 		{}
// 	);
