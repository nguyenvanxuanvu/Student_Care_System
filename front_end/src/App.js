import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Instruction from './pages/instruction/instruction';
import Event from './pages/event/event';
import Scholarship from './pages/scholarship/scholarship';
import Job from './pages/job/job';
import News from './pages/news/news';
import SignIn from './pages/signin';
import axios from 'axios';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/instruction' component={Instruction} />
        <Route path='/event' component={Event} />
        <Route path='/scholarship' component={Scholarship} />
        <Route path='/job' component={Job} />
        <Route path='/news' component={News} />
        <Route path='/event' component={Event} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
