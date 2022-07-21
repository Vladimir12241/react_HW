import React from "react";
import { actionPromise } from "./data/promiseReducer";
import { gql } from "./data/dataGQL";
import { store } from "./data/promiseReducer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import CAsideMenu from "./components/AsideMenu";
import Header from "./components/Header";
import LoginForm from "./components/Login";
import CategoryById from "./components/CategoriesById";
import GoodById from "./components/GodContent";

import "./App.scss";

const history = createBrowserHistory();

const actionAllCategories = () => {
	const queryPromise = gql(
		`query Cats{
        CategoryFind(query:"[{}]"){
              _id
          name    
        }
      }`,
		{}
	);
	return actionPromise("allCategories", queryPromise);
};

store.dispatch(actionAllCategories());

const Content = () => (
	<div className="Content">
		<Route path="/login" component={LoginForm} />
		<Route path="/category/:_id" component={CategoryById} />
		<Route path="/goods/:_id" component={GoodById} />
	</div>
);

const App = () => (
	<div className="App">
		<Router history={history}>
			<Provider store={store}>
				<Header />
				<div className="All-Content">
					<CAsideMenu />
					<Content />
				</div>
			</Provider>
		</Router>
	</div>
);

export default App;
