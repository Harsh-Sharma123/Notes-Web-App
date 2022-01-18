
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Components/Nav';
import Notes from './Components/Notes';
import CreateNote from './Components/CreateNote';

function App() {
  return (
    <>
    <Router>
        <Nav />
      <Switch>
      <Route  exact path="/"><Home /></Route>
      <Route  exact path="/notes"><Notes /></Route>
      <Route  exact path="/createnote"><CreateNote /></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
