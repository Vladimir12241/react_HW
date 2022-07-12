import { Planets } from "./Planets";
import { Characters } from "./Characters";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import Species from "./Species";

const FilmPrint = ({ data: { ServData, characters, planets, species, starships, vehicles } }) => {
	const { director, episode_id, opening_crawl, producer, release_date, title } = ServData;
	return (
		<div className="card">
			<h2 className="card-header">{title}</h2>
			<div className="Film-Ifo">
				<p>
					Episode: <strong>{episode_id}</strong>
				</p>
				<p>
					Release: <strong>{release_date}</strong>
				</p>
				<p>
					Director: <strong>{director}</strong>
				</p>
				<p>
					Producer: <strong>{producer}</strong>
				</p>
				<p>{opening_crawl}</p>
			</div>
			<Characters characters={characters} />
			<Species species={species} />
			<Starships starships={starships} />
			<Planets planets={planets} />
			<Vehicles vehicles={vehicles} />
		</div>
	);
};

export default FilmPrint;
