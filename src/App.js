import './App.css';
import { SelectForm } from "./components/Select";
import { InfoRate } from "./components/InfoRate";
import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      <div className="content">

        <Switch>

            <Route exact path="/">
              <SelectForm />
            </Route>

            <Route path="/InfoRate" >
              <InfoRate />
            </Route>

        </Switch>
      </div>

      </div>
    </Router>
  );
}