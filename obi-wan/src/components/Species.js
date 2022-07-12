import { useState } from "react";
import keyGen from "../data/keyGenFx";

const Specie = ({ specie }) => {
	const {
		average_height,
		average_lifespan,
		classification,
		designation,
		eye_colors,
		hair_colors,
		language,
		name,
		skin_colors,
	} = specie;
	const [show, setShow] = useState(false);
	return (
		<div className="Specie-Base-Info border">
			<h2>{name}</h2>
			<p className="pointer" onClick={() => setShow(!show)}>
				About <strong>{name}</strong> :
			</p>
			{show && (
				<span>
					{!!classification && <p className="Acout-Character">Classification: {classification}</p>}
					{!!language && <p className="Acout-Character">Language: {language}</p>}
					{!!average_lifespan && <p className="Acout-Character">Average lifespan: {average_lifespan}</p>}
					{!!designation && <p className="Acout-Character">Designation: {designation}</p>}
					{!!skin_colors && <p className="Acout-Character">Skin colors {skin_colors}</p>}
					{!!hair_colors && <p className="Acout-Character">Hair colors: {hair_colors}</p>}
					{!!eye_colors && <p className="Acout-Character">Eye colors: {eye_colors}</p>}
					{!!average_height && <p className="Acout-Character">Average height: {average_height}</p>}
				</span>
			)}
		</div>
	);
};

const Species = ({ species }) => {
	const [show, setShow] = useState(false);

	return (
		<div className="Species">
			<h3 className="pointer" onClick={() => setShow(!show)}>
				Species List
			</h3>
			{show && (
				<ul className="Species-List">
					{species.map((specie) => (
						<li key={keyGen()}>
							<Specie specie={specie} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Species;
