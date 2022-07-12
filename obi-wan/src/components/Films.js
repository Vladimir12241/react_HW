import { useState } from "react";
import keyGen from "../data/keyGenFx";

const Film = ({ film: { director, episode_id, opening_crawl, producer, release_date, title } }) => {
	return (
		<li>
			<h4>{title}</h4>
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
		</li>
	);
};

const Films = ({ films }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="Filsms-Box">
			<h3 className="pointer" onClick={() => setShow(!show)}>
				Films list
			</h3>
			{show && (
				<ul className="Films-List">
					{films.map((film) => (
						<Film film={film} key={keyGen()} />
					))}
				</ul>
			)}
		</div>
	);
};

export default Films;
