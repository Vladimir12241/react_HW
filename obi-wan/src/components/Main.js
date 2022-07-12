import { useState } from "react";
import { connect, Provider } from "react-redux";
import { NewHope, ObiWan } from "../data/data";
import { getFetch } from "../data/dataFetch";
import { store } from "../data/promiseReducer";
import FilmPrint from "./FilmPrint";
import NoData from "./NoData";
import CharacterPrint from "./CharacterPrint";

const DataCeck = ({ data }) => {
	const hash = window.location.hash.split("/")[1];
	const dataToObject = (data) => {
		let dataObject = {};
		data.map((item) => Object.assign(dataObject, item));
		return dataObject;
	};
	return (
		<>
			{data ? (
				hash === "Obi_Wan" ? (
					<CharacterPrint data={dataToObject(data)} />
				) : (
					hash === "A_New_Hope" && <FilmPrint data={dataToObject(data)} />
				)
			) : (
				<NoData />
			)}
		</>
	);
};

const ConectData = connect((state) => ({ data: state.ServData?.payload }))(DataCeck);

const Main = () => {
	const [hash, setHash] = useState("#");
	window.onhashchange = () => {
		const route = window.location.hash.split("/")[1];
		if (!route) window.location.hash = "/Obi_Wan";
		if (route !== hash) setHash(route);
		if (hash === "Obi_Wan") {
			getFetch("ServData", ObiWan);
		} else if (hash === "A_New_Hope") {
			getFetch("ServData", NewHope);
		}
	};

	window.onhashchange();
	return (
		<Provider store={store}>
			<main className="Main">
				<ConectData />
			</main>
		</Provider>
	);
};

export default Main;
