import { RickMortyEpisodes } from "../data/RickMotryEpisodes";
import Episode from "./Episode";
import { keyGen } from "./Events";

const MainContent = () => {
	return (
		<section className="Main">
			<ul className="Maine-List">
				{RickMortyEpisodes.map((episode) => (
					<Episode episode={episode} key={keyGen()} />
				))}
			</ul>
		</section>
	);
};

export default MainContent;
