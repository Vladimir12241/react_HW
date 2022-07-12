import { useState } from "react";
import keyGen from "../data/keyGenFx";

const Character = ({ character }) => {
	const { birth_year, eye_color, skin_color, gender, hair_color, height, mass, name } = character;
	const [show, setShow] = useState(false);
	let hash = window.location.hash.split("/")[1];
	let thisClass;
	hash === "Obi_Wan" ? (thisClass = "Character-Base-Info") : (thisClass = "Character-Base-Info border");
	return (
		<div className={thisClass}>
			<h2>{name}</h2>
			<>
				<p className="pointer" onClick={() => setShow(!show)}>
					About <strong>{name}</strong> :
				</p>
				{show && (
					<span>
						{gender && <p className="Acout-Character">Gender: {gender}</p>}
						{birth_year && <p className="Acout-Character">Dirth year: {birth_year}</p>}
						{skin_color && <p className="Acout-Character">Skin color: {skin_color}</p>}
						{eye_color && <p className="Acout-Character">Eye color: {eye_color}</p>}
						{hair_color && <p className="Acout-Character">Hair color: {hair_color}</p>}
						{height && <p className="Acout-Character">Height: {height}</p>}
						{mass && <p className="Acout-Character">Mass: {mass}</p>}
					</span>
				)}
			</>
		</div>
	);
};

const Characters = ({ characters }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="Characters">
			<h3 className="pointer" onClick={() => setShow(!show)}>
				Characters List
			</h3>
			{show && (
				<ul className="Charactes-List">
					{characters.map((character) => (
						<li key={keyGen()}>
							<Character character={character} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export { Character, Characters };
