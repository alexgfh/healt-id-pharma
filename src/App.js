import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import './App.css';

const App = () => (
  <Router>
    <div>
      <hr />
      <Route exact path="/access" component={Login} />
      <Route path="/code" component={About} />
      <Route path="/medications" component={Medications} />
      <Route path="/success" component={Success} />
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
  <form action="/medications">
    <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Prescription Validation Code</ControlLabel>
            <FormControl
              type="text"
            />
          </FormGroup>
          
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Validate
          </Button>
        </form>
  </div>
);

function Dispense() {
	console.log("Dispensed");
}

const ButtonLink = () => {
  return (
      <a href="/success"><button>Dispense</button></a>
  )
}

function Medications (match) {
	function Dispense() {
		console.log("Dispensed");
	}
  return <div className="medList">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Hussam_Awak.png/200px-Hussam_Awak.png"></img>
    <h2>Medications</h2>
		<table>
		<tr>
        <td>Name:</td><td> Maria Teresa</td>
        </tr>
        <tr>
        <td>ID:</td> <td>13705893405</td>
        </tr>
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
        <td><ButtonLink>Dispense</ButtonLink></td>
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

const Success = ({ match }) => (
  <div>
    <h3>Medication dispensed from receipt.</h3>
  </div>
);

export default App;
