import logo from "../img/logo.png";
import { ReactComponent as Login } from "../img/login.svg";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header>
			<div className="Logo">
				<Link to={"/"}>
					<img src={logo} alt="Shop-Logo" />
				</Link>
			</div>
			<div className="Navigation">
				<ul>
					<li>Some </li>
					<li>Namvigation</li>
					<li>Items</li>
				</ul>
			</div>
			<div className="User-Ico">
				{localStorage.authToken ? (
					<Link to={"/user.name"}>
						<Login className="Loged" />
					</Link>
				) : (
					<Link to={"/login"}>
						<Login className="Need-Login" />
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
