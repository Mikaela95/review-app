import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";

const App = () => {
	return (
		<div>
			<Switch>
				<Jumbotron style={{ marginBottom: "auto" }}>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
				</Jumbotron>
			</Switch>
		</div>
	)
}

export default App;



