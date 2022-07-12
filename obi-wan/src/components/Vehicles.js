import { useState } from "react";
import keyGen from "../data/keyGenFx";

const Vehicle = ({
	vehicle: {
		name,
		model,
		manufacturer,
		cost_in_credits,
		length,
		max_atmosphering_speed,
		crew,
		passengers,
		cargo_capacity,
		vehicle_class,
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
						Vehicle class: <strong>{vehicle_class}</strong>
					</li>
					<li>
						Manufacturer: <strong>{manufacturer}</strong>
					</li>
					<li>
						Model: <strong>{model}</strong>
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
						Max speed: <strong> {max_atmosphering_speed} </strong>
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

const Vehicles = ({ vehicles }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="Vehicled">
			<h3 className="pointer" onClick={() => setShow(!show)}>
				Vehicles
			</h3>
			{show && (
				<ul>
					{" "}
					{vehicles.map((vehicle) => (
						<Vehicle vehicle={vehicle} key={keyGen()} />
					))}
				</ul>
			)}
		</div>
	);
};

export default Vehicles;
