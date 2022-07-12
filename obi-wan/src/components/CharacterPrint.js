import { Planet } from "./Planets";
import Films from "./Films";
import Vehicles from "./Vehicles";
import Starships from "./Starships";
import { useState } from "react";
import { Character } from "./Characters";

const CharacterPrint = ({ data: { ServData, homeworld, films, starships, vehicles } }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="Character-Box">
			<Character character={ServData} size={true} />
			<>
				<div>
					<h3 className="pointer" onClick={() => setShow(!show)}>
						Home world
					</h3>
					{show && <Planet planet={homeworld} />}
				</div>
			</>
			<Films films={films} />
			<Vehicles vehicles={vehicles} />
			<Starships starships={starships} />
		</div>
	);
};

export default CharacterPrint;
