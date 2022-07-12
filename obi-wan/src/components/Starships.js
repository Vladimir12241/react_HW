import { useState } from "react";
import keyGen from "../data/keyGenFx";

const Starship = ({
	starship: {
		cargo_capacity,
		consumables,
		cost_in_credits,
		crew,
		hyperdrive_rating,
		length,
		manufacturer,
		max_atmosphering_speed,
		model,
		name,
		passengers,
		starship_class,
	},
}) => {
	const [show, setShow] = useState(false);
	return (
		<li className="border">
			<h4>{name}</h4>
			<p className="pointer" onClick={() => setShow(!show)}>
				About <strong>{name}</strong> :
			</p>
			{show && (
				<ul className="vehicle-Ifo">
					<li>
						Starship class: <strong>{starship_class}</strong>
					</li>
					<li>
						Manufacturer: <strong>{manufacturer}</strong>
					</li>
					<li>
						Model: <strong>{model}</strong>
					</li>
					<li>
						Consumables: <strong>{consumables}</strong>
					</li>
					<li>
						Cost: <strong>{cost_in_credits}</strong>
					</li>
					<li>
						Crew: <strong>{crew}</strong>
					</li>
					<li>
						Passengers: <strong>{passengers}</strong>
					</li>
					<li>
						Hyperdrive rating: <strong>{hyperdrive_rating}</strong>
					</li>
					<li>
						Max atmosphering speed: <strong> {max_atmosphering_speed} </strong>
					</li>
					<li>
						Length: <strong>{length}</strong>
					</li>
					<li>
						Cargo capacity: <strong>{cargo_capacity}</strong>
					</li>
				</ul>
			)}
		</li>
	);
};

const Starships = ({ starships }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="Starships">
			<h3 className="pointer" onClick={() => setShow(!show)}>
				{" "}
				Starships
			</h3>
			{show && (
				<ul>
					{starships.map((starship) => (
						<Starship starship={starship} key={keyGen()} />
					))}
				</ul>
			)}
		</div>
	);
};

export default Starships;
