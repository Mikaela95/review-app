import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import { NavBarComponent } from "./Navbar.js";

const App = () => {
	return (
		<Router>
			<div className="App" style={{backgroundColor: '#e9ecef'}}>
				<NavBarComponent>
					<Jumbotron style={{ marginBottom: "auto" }}>
						<Route exact path="/" component={Home} />
					</Jumbotron>
				</NavBarComponent>
			</div>
		</Router>
	)
}

export default App;



