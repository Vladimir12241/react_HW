const CharacterEpisodes = ({ episode: { name, air_date } }) => {
	return (
		<li>
			<span>
				{" "}
				Name: <strong>{name}</strong>
			</span>
			<p>Air Date: {air_date}</p>
		</li>
	);
};

export default CharacterEpisodes;
