import React from 'react';
import './App.css';
import   Navbar  from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Instruction from './pages/instruction/instruction';
import Event from './pages/event/event';
import Scholarship from './pages/scholarship/scholarship';
import Job from './pages/job/job';
import News from './pages/news/news';
import SignIn from './pages/signin';
import  EventInform  from './pages/event/eventInformation';
import JobInform from './pages/job/jobInform';
import ScholarInform from './pages/scholarship/scholarInform';
import NewsInform from './pages/news/newsInform';
import Righthome from './pages/home/righthome';
import  AppointmentForm from './pages/appointment/FormAppointment'
import RatingForm from './pages/rating/FormRating'
import Login from './pages/login/login'
import EventForm from './pages/event/eventform';
import userInfo from './pages/user/userInfor';
import repreInfo from './pages/user/repreInfor';

import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [auth, setAuth] = useState(false);
    useEffect(() => {
        const USER_NAME = localStorage.getItem("userName");
        if(USER_NAME) {
            setAuth(true);
        }
    }, [])
  return (
    <Router>
      <Navbar auth={auth} setAuth={setAuth} />
      <Switch>
        <Route exact path='/'  render={props => <Home/>} />
        <Route exact path='/home' render={props => <Home/>}/>
        <Route exact path="/login"  render={props => auth ? <Home/> : <Login auth={auth} setAuth={setAuth}/>}/>
        {/* <Route exact path='/home'  component={Home} /> */}
        <Route exact path='/instruction' component={Instruction} />
        <Route exact path='/event' component={Event} />
        <Route exact path='/event/:id' component={EventInform} />
        <Route exact path='/scholarship' component={Scholarship} />
        <Route exact path='/scholarship/:id' component={ScholarInform} />
        <Route exact path='/job' component={Job} />
        <Route exact path='/job/:id' component={JobInform} />
        <Route exact path='/news' component={News} />
        <Route exact path='/news' component={News} />
        <Route exact path='/news/:id' component={NewsInform} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/appointmentform' component={AppointmentForm} />
        <Route exact path='/ratingform' component={RatingForm} />
        <Route exact path='/addEvent' component={EventForm} />
        <Route exact path='/user' component={userInfo}/>
        <Route exact path='/representative' component={repreInfo}/>

      </Switch>
      
    </Router>
  );
}

export default App;
