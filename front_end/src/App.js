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
import Message from './pages/message/message';
import Replies from './pages/message/replies';
import newsForm from './pages/news/addnews';
import eventForm from './pages/event/addevent';
import jobForm from './pages/job/addjob';
import scholarForm from './pages/scholarship/addscholarship';
import StaffInfo from './pages/user/staffInfor';
import AddCall from './pages/call/addCall';
import ListRating from './pages/rating/ListRating';
function App() {
  const [auth, setAuth] = useState(false);
    useEffect(() => {
       localStorage.setItem("language", "VI");
        const USER = localStorage.getItem("userid");
        if(USER) {
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
        
        <Route exact path='/news/:id' component={NewsInform} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/appointmentform' render={props => auth ? <AppointmentForm/> : <Login auth={auth} setAuth={setAuth}/>} />
        <Route exact path='/ratingform' render={props => auth ? <RatingForm/> : <Login auth={auth} setAuth={setAuth}/>} />
        <Route exact path='/listrating' render={props => auth ? <ListRating/> : <Login auth={auth} setAuth={setAuth}/>} />
        <Route exact path='/addEvent' component= {EventForm}/>
        <Route exact path='/user/:id' render={props => auth ? <UserInfo/> : <Login auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/representative/:id' render={props => auth ? <RepreInfo/> : <Login auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/appointmentlist' render={props => auth ? <Appointmentlist/> : <Login auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/appointmentlist1' render={props => auth ? <Appointmentlist1/> : <Login auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/message' render={props => auth ? <Message/> : <Login auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/replies' render={props => auth ? <Replies/> : <Login auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/newsform' component= {newsForm}/>
        <Route exact path='/eventform' component= {eventForm}/>
        <Route exact path='/jobform' component={jobForm}/>
        <Route exact path='/scholarform' component={scholarForm}/>
      
        <Route exact path='/staffInfo/:id' component={StaffInfo}/>
        <Route exact path='/addCall' component={AddCall}/>
      </Switch>
      
    </Router>
  );
}

export default App;
