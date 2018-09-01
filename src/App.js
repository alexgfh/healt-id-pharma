import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";

const App = () => (
  <Router>
    <div>
      <hr />
      <Route exact path="/login/*" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/medications" component={Medications} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

function Dispense() {
	console.log("Dispensed");
}

function Medications (match) {
	function Dispense() {
		console.log("Dispensed");
	}
  return <div className="medList">
    <h2>Medications</h2>
		<table>
        <tr>
        <td className="medName">Ibuprofen</td>
        
		<td><select classId="med1">
		  <option value="3">3</option>
		  <option value="2">2</option>
		  <option value="1">1</option>
		  <option value="0">0</option>
		</select></td></tr>
        <tr>
     
        <td className="medName">Aspirin</td>
        
		<td><select classId="med2">
		  <option value="3">3</option>
		  <option value="2">2</option>
		  <option value="1">1</option>
		  <option value="0">0</option>
		</select></td></tr>
        
        <tr>
        <td><button onClick={Dispense}>Dispense</button></td>
        </tr>
        </table>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <div/>}
    />
  </div>
};

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
