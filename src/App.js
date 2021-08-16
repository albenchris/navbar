import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
        </Switch>
      </Router>
      Hi
    </div>
  );
}

export default App;
