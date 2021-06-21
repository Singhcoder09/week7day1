import './App.css';
import BarChart from './Bar/BarChart';
import SphereApp from './Sphere/SphereApp';
import TreeApp from './Tree/TreeApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <a className="m-5 btn btn-warning" href="/barChart" rel="noopener noreferrer">
          Animated Bar Chart
        </a>
        <a className="m-5 btn btn-primary" href="/tree" rel="noopener noreferrer">
          Collapsible Tree
        </a>
        <a className="m-5 btn btn-info" href="/spheres" rel="noopener noreferrer">
          Sphere of Spheres
        </a>
        <Switch>
          <Route exact path="/barChart">
            <BarChart />
          </Route>
          <Route exact path="/tree">
            <TreeApp />
          </Route>
          <Route exact path="/spheres">
            <SphereApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
