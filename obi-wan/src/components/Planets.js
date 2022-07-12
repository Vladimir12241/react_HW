import { useState } from "react";
import keyGen from "../data/keyGenFx";

const Planet = ({ planet }) => {
	const { climate, diameter, gravity, name, orbital_period, population, rotation_period, surface_water, terrain } =
		planet;
	const [show, setShow] = useState(false);
	return (
		<div className="Planet border ">
			<h4 className="PlanetName">{name}</h4>
			<p className="pointer" onClick={() => setShow(!show)}>
				About <strong>{name}</strong> :
			</p>
			{show && (
				<ul className="Planet-Character">
					{diameter && <li>Diameter: {diameter}</li>}
					{gravity && <li>Gravity: {gravity}</li>}
					{terrain && <li>Terrain: {terrain}</li>}
					{orbital_period && <li>Orbital period: {orbital_period}</li>}
					{rotation_period && <li>Rotation period: {rotation_period}</li>}
					{surface_water && <li>Surface water: {surface_water}</li>}
					{climate && <li>Clilmate: {climate}</li>}
					{population && <li>Population: {population}</li>}
				</ul>
			)}
		</div>
	);
};

const Planets = ({ planets }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="Planets">
			<h3 className="pointer" onClick={() => setShow(!show)}>
				Planets list
			</h3>
			{show && (
				<ul className="Planets-List">
					{planets.map((planet) => (
						<li key={keyGen()}>
							<Planet planet={planet} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export { Planet, Planets };
