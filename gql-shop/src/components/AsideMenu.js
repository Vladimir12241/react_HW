import { Link } from "react-router-dom";
import { connect } from "react-redux";

const AisdeMenuItem = ({ category: { _id, name } }) => (
	<li>
		<Link to={`/category/${_id}`}>{name}</Link>
	</li>
);

const AsideMenu = ({ categories = [], status }) =>
	status === "PENDING" || !status ? (
		<>Loading</>
	) : (
		<aside>
			<h3>Categories</h3>
			<ul>
				{categories.map((category) => (
					<AisdeMenuItem category={category} key={category._id} />
				))}
			</ul>
		</aside>
	);

const CAsideMenu = connect((state) => ({
	categories: state.allCategories?.payload,
	status: state.allCategories?.status,
}))(AsideMenu);

export default CAsideMenu;
