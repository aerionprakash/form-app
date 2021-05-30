// import logo from './logo.svg';
import './App.css';
import JSONForm from './JSONForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import JSONSchemaForm from './JSONSchemaForm';
import { List } from './List';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/add" exact>
            <JSONForm />
          </Route>
          <Route path="/edit/:id" exact>
            <JSONForm />
          </Route>
          <Route path="/json-schema-form">
            <JSONSchemaForm />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
