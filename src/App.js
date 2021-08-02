import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact, Events } from './components'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Events />
        </Route>
      </Router>
    </div>
  );
}

export default App;
