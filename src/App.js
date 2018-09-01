import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import './App.css';
import icon from "./Icon.png";

const App = () => (
  <Router>
    <div>
      <hr />
      <Route exact path="/" component={Login} />
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
  <div className="Validation">
  <form action="/medications">
  <img id="validation-icon" src={icon}></img>
    <FormGroup id="validation-group" controlId="code" bsSize="large">
            <ControlLabel id="validation-text"> Prescription Validation Code: </ControlLabel>
            <FormControl
              type="text"
            />
          </FormGroup>
          
          <Button
            block
            id="validate-button"
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
  <img src={icon}></img>
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
  <img id="success-icon" src={icon}></img>
    <h2>Medication dispensed from receipt.</h2>
  </div>
);

export default App;
