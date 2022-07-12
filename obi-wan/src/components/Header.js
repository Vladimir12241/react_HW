const Header = () => {
	return (
		<header>
			<h1> Star Wars </h1>
			<nav>
				<ul className="Nav-List">
					<li className="Nav-List-Item">
						<a className="Nav-List_Link" href="#/Obi_Wan">
							Obi-Wan
						</a>
					</li>
					<li className="Nav-List-Item">
						<a className="Nav-List_Link" href="#/A_New_Hope">
							A New Hope
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
