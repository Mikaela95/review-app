import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import { NavBarComponent } from "./Navbar.js";
import { RestaurantList } from "./RestaurantList.js";
import { EditReview } from "./EditExpense.js";
import { DeleteReview } from "./DeleteReview.js";
import { Restaurant } from "./Restaurant.js";

const App = () => {
	return (
		<Switch>
			<div>
				<NavBarComponent />
					<Jumbotron style={{ marginBottom: "auto" }}>
						<Route path="/" exact component={RestaurantList} />
						<Route path="/restaurants/:id" component={Restaurant} />
						<Route path="/edit" component={EditReview} />
						<Route path="/delete" component={DeleteReview} />
					</Jumbotron>
			</div>
		</Switch>
	)
}

export default App;



