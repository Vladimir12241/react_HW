import { RickMortyPersons } from "../data/RickMortyPersons";
import { AboutCharacters, NoCharacterInfo } from "./AboutCharacters";
import { keyGen } from "./Events";

const Character = ({ name: { name } }) => {
	let info;
	const isData = () => {
		RickMortyPersons.map((item) => item.name === name && (info = item));
		return info;
	};
	return (
		<li className="Characters">
			{name}
			<div className="About-Characters hide">
				{!isData() ? <NoCharacterInfo key={keyGen()} /> : <AboutCharacters person={info} key={keyGen()} />}
			</div>
		</li>
	);
};

export default Character;
