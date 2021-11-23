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
import { useEffect } from 'react';
import { useState } from 'react';
import HomeAll from './pages/home/homeAll';
import UserInfo from './pages/user/userInfor';
import RepreInfo from './pages/user/repreInfor';
import Appointmentlist from './pages/appointment/appointmentlist';
import Appointmentlist1 from './pages/appointment/appointmentlist1';
import newsForm from './pages/news/addnews';
import eventForm from './pages/event/addevent';
import jobForm from './pages/job/addjob';
import scholarForm from './pages/scholarship/addscholarship';

function App() {
  const [auth, setAuth] = useState(false);
    useEffect(() => {
       localStorage.setItem("language", "VI");
        const EMAIL = localStorage.getItem("email");
        if(EMAIL) {
            setAuth(true);
        }
    }, [])
  return (
    <Router>
      <Navbar auth={auth} setAuth={setAuth} />
      <Switch>
        <Route exact path='/'  render={props => <Home/>} />
        <Route exact path='/homeAll'  render={props => <HomeAll/>} />
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
        <Route exact path='/user/:id' component={UserInfo}/>
        <Route exact path='/representative/:id' component={RepreInfo}/>
        <Route exact path='/appointmentlist' component={Appointmentlist}/>
        <Route exact path='/appointmentlist1' component={Appointmentlist1}/>

        <Route exact path='/newsform' component={newsForm}/>
        <Route exact path='/eventform' component={eventForm}/>
        <Route exact path='/jobform' component={jobForm}/>
        <Route exact path='/scholarform' component={scholarForm}/>

      </Switch>
      
    </Router>
  );
}

export default App;
