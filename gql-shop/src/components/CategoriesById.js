import { connect } from "react-redux";
import { actionPromise } from "../data/promiseReducer";
import { gql, backendURL } from "../data/dataGQL";
import { useEffect } from "react";
import NoData from "./NoData";
import { Link } from "react-router-dom";
// import { store } from "../data/promiseReducer";

const actionCategoryById = (_id) => {
	const queryPromise = gql(
		`
        query catById($query:String){
            CategoryFindOne(query:$query){
            _id name 
                goods{
              _id name price images{
                url
              }
            }
          }
        }`,
		{ query: JSON.stringify([{ _id }]) }
	);

	return actionPromise("categoryById", queryPromise);
};

const GoodCards = ({ good: { _id, name, price, images } }) => (
	<div className="Good-Carts">
		<Link className="Good-Link" to={`/goods/${_id}`}>
			<div className="Img-Box">
				<img className="Good-Img" src={`${backendURL}/${images && images[0] && images[0].url}`} alt={name} />
			</div>
			<h2 className="Good-Name">{name}</h2>
		</Link>
		<span>$ {price}</span>
	</div>
);

const ThisCategory = ({
	match: {
		params: { _id },
	},
	onIdChange,
	category,
}) => {
	useEffect(() => {
		onIdChange(_id);
	}, [_id, onIdChange]);
	return category ? (
		<div className="Curent-Category">
			<h2>{category.name}</h2>
			<div className="Category-Goods">
				{!!category.goods?.length ? (
					category.goods.map((good) => <GoodCards key={good._id} good={good} />)
				) : (
					<NoData />
				)}
			</div>
		</div>
	) : (
		<> LOADIN</>
	);
};
const CategoryById = connect((state) => ({ category: state.categoryById?.payload }), {
	onIdChange: actionCategoryById,
})(ThisCategory);

// ({
// 	match: {
// 		params: { _id },
// 	},
// }) => {
// 	actionGQL("CatById", _id)

//  return	(
// 	<div>
// 		<h1>This if _id: {_id}</h1>
// 	</div>
// )}

// const CPageCategory = connect((state) => ({ category: state.categoryById?.payload?.data?.CategoryFindOne }), {
// 	onIdChange: actionCategoryById,
// })(PageCategory);

export default CategoryById;
