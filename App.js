import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Product from './Components/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >

      <Router>
        <Home />
        <Route path ="/About" component={About}/>
        <Route path="/Product" component={Product}/>
      </Router>
    </div>
  );
}

export default App;
