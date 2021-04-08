import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import { NavBarComponent } from "./Navbar.js";
import { RestaurantList } from "./RestaurantList.js";
import { EditExpense } from "./EditExpense.js";
import { CategoryItem } from "./CategoryItem.js";
import { DeleteExpense } from "./DeleteExpense.js";
import { Restaurant } from "./Restaurant.js";

const App = () => {
	return (
		<Switch>
			<div>
				<NavBarComponent />
					<Jumbotron style={{ marginBottom: "auto" }}>
						<Route path="/" exact component={RestaurantList} />
						<Route path="/restaurants/:id" component={Restaurant} />
						<Route path="/edit" component={EditExpense} />
					</Jumbotron>
			</div>
		</Switch>
	)
}

export default App;



