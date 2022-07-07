import CharacterEpisodes from "./CharacterEpisodes";
import { keyGen } from "./Events";

const AboutCharacters = ({ person: { image, name, gender, episode } }) => {
	return (
		<>
			<img src={image} alt={name}></img>
			<div className="Character-Details">
				<h2>Name: {name}</h2>
				<p>Gender: {gender}</p>
			</div>
			<div className="Character-Episodes">
				<span className="Episodes">
					<strong>Episodes</strong>
				</span>
				<ul className="Character-Episode-List">
					{episode.map((episode) => (
						<CharacterEpisodes episode={episode} key={keyGen()} />
					))}
				</ul>
			</div>
		</>
	);
};

const NoCharacterInfo = () => {
	return <h2>No Info</h2>;
};
export { AboutCharacters, NoCharacterInfo };
