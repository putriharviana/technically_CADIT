import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Problem1 from './view/Problem1'
import Problem2 from './view/Problem2'
import Problem3 from './view/Problem3'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">Problem1 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/problem2">Problem2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/problem3">Problem3</a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Problem1 />
          </Route>
          <Route exact path="/problem2">
            <Problem2 />
          </Route>
          <Route exact path="/problem3">
            <Problem3 />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
