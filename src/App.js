import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Hero from './components/Hero/Hero';
import Home from './components/Home';
import Rankings from './components/Rankings';
import NotFound from './components/NotFound';

function App() {
 
  return (
    <Router>
      <Switch>
      <Route path="/rankings" component={(props) => <Rankings {...props} />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={(props) => <Hero {...props} />} />
        <Route component={NotFound} />
      </Switch>
     
    </Router>
  );
}

export default App;