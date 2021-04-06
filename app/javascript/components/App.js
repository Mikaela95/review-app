import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import { NavBarComponent } from "./Navbar.js";
import { ExpenseList } from "./ExpenseList.js";
import { EditExpense } from "./EditExpense.js";
import { CategoryItem } from "./CategoryItem.js";
import { DeleteExpense } from "./DeleteExpense.js";

const App = () => {
	return (
		<Router>
			<div className="App" style={{backgroundColor: '#e9ecef'}}>
				<NavBarComponent>
					<Jumbotron style={{ marginBottom: "auto" }}>
						<Route path="/" exact component={ExpenseList} />
						<Route path="/category/:id" component={CategoryItem} />
          				<Route path="/edit" component={EditExpense} />
          				<Route path="/delete" component={DeleteExpense} />
					</Jumbotron>
				</NavBarComponent>
			</div>
		</Router>
	)
}

export default App;



