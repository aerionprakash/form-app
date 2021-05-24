// import logo from './logo.svg';
import './App.css';
import JSONForm from './JSONForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import JSONSchemaForm from './JSONSchemaForm';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/json-form">JSON Form</Link>
            </li>
            <li>
              <Link to="/json-schema-form">JSON Schema Form</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/json-form">
            <JSONForm />
          </Route>
          <Route path="/json-schema-form">
            <JSONSchemaForm />
          </Route>
          {/* <Route path="/">
            <App />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
