import { connect } from "react-redux";
import { actionPromise } from "../data/promiseReducer";
import { gql, backendURL } from "../data/dataGQL";
import { useEffect } from "react";
import NoData from "./NoData";

const actionGoodById = (_id) => {
	const queryPromise = gql(
		`query goodById($query:String){
            GoodFindOne(query:$query){
				_id, name, description, price, images{url}
            }
          }`,
		{ query: JSON.stringify([{ _id }]) }
	);

	return actionPromise("goodById", queryPromise);
};

const GoodCard = ({ good: { _id, name, price, description, images } }) => (
	<>
		<div className="Img-Box">
			<img className="Good-Img" src={`${backendURL}/${images && images[0] && images[0].url}`} alt={name} />
		</div>
		<div className="Buy">
			<span className="Price">$ {price}</span>
			<dutton className="Buy-btn" onClick={() => alert("Купить " + _id)}>
				Купить!
			</dutton>
		</div>
		<section>
			<h2 className="Good-Name">{name}</h2>
			<span className="Description">{description}</span>
		</section>
	</>
);

const ThisGood = ({
	match: {
		params: { _id },
	},
	onIdChange,
	good,
}) => {
	useEffect(() => {
		onIdChange(_id);
	}, [_id, onIdChange]);
	return good ? <div className="Curent-Good">{!!good ? <GoodCard good={good} /> : <NoData />}</div> : <> LOADIN</>;
};
const GoodById = connect((state) => ({ good: state.goodById?.payload }), {
	onIdChange: actionGoodById,
})(ThisGood);

export default GoodById;
