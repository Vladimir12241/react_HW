import Character from "./Character";
import { CharacterSelect, keyGen } from "./Events";
import { useState } from "react";

const Episode = ({ episode: { name, air_date, characters } }) => {
	const [show, setShow] = useState(false);
	// const [visible, setVisible] = useState(false)
	return (
		<li className="Episode-List-Item">
			<h2> Episode: {name}</h2>
			<span>Air Date: {air_date}</span>
			<button className="Show-Characters" type="button" onClick={() => setShow(!show)}>
				Characters
			</button>
			{show && (
				<>
					<ul
						className={"Characters-List"}
						onClick={(e) => {
							e.preventDefault();
							CharacterSelect();
							{
								const character = e.target.querySelector(".About-Characters");
								character.classList.remove("hide");
							}
						}}
					>
						{characters.map((name) => (
							<Character name={name} key={keyGen()} />
						))}
					</ul>
				</>
			)}
		</li>
	);
};

export default Episode;
