
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Components/Header';
import Landingpage from './Pages/Home/landingpagecontroller';
import Mapview from './Pages/Mapview/mapviewcontroller';
import history from './Components/History';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router history={history}>
        <Header />
              <Switch>
                  <Route exact path="/" component={Landingpage} />
                  <Route path="/mapview" component={Mapview} />
              </Switch>
        </Router>
    </div>
  );
}

export default App;
