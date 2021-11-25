import React, { Component } from 'react';
import '../Inform.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import Righthome from '../home/righthome';
import { useParams } from 'react-router';
import Moment from 'moment'
const EventInform = () =>  {
  const [listEvents, setlistEvents] = useState([]);
  let {id} = useParams();
  const handleRegister=()=>{

  }
  const change = (a) =>{
    if (a==="Hội thảo"){
      if (localStorage.getItem("language")){
        return "Hội thảo";
      }
      else{
        return "Seminor"
      }
    }
    else if (a==="Học thuật"){
      if (localStorage.getItem("language")){
        return a;
      }
      else{
        return "Acedemic"
      }
    }
    else if (a==="Ngoại khóa"){
      if (localStorage.getItem("language")){
        return a;
      }
      else{
        return "Extracurricular"
      }
    }
  }

  useEffect(() => {
    axios.get("http://localhost:3000/event1/" ,{params: {id:id}}).then(function (response) {
      setlistEvents(response.data[0]);
      })
    ;
    
  }, []);
  var type;
  var name;
  var organizer;
  var num;
  var place;
  var startTime;
  var endTime;
  var num;
  var addDay;
    for (let i of listEvents){
      if (i.ID.toString() === id){
          type = i.Type;
          name = i.EventName;
          organizer = i.Organizer;
          num = i.ParticipantMaxNum;
          place = i.Place;
          startTime = i.STime;
          endTime = i.ETime;
          addDay = i.AddDay;

      }
    }
        
          return (
            <div class="row w-100 ps-5">
            <div class="col-9 pt-4 ps-5 ">
            <div className="page-container">
                <div className="page-content">
                    <p>{change(type)}</p>
                    <h1>{name}</h1>
                    <br/>
                    
                </div>
                <div>
                  <h4>{localStorage.getItem("language")? "Địa điểm":"Place"}</h4>
                  <p>{place}</p>
                </div>
                <div>
                  <h4>{localStorage.getItem("language")? "Số lượng tham gia dự kiến":"Expected number of participants"}</h4>
                    <p>{num}</p>
                </div>
                <div>
                  <h4>{localStorage.getItem("language")? "Thời gian":"Time"}</h4>
                  <p><strong>{Moment(startTime).utcOffset('+07:00')
                  .format('hh:mm DD/MM/YYYY')}</strong> to <strong>{Moment(endTime).utcOffset('+07:00')
                  .format('hh:mm DD/MM/YYYY')}</strong></p>
                </div>
              {localStorage.getItem("type1") &&  (<div class="btn btn-primary" onClick={handleRegister}>Đăng ký</div>)}
              {localStorage.getItem("type2") &&  (<div class="btn btn-primary">Danh sách đăng ký</div>)}
            </div>
            </div>
            <div class="col-2">
            <Righthome />
          </div>
          </div>
        );
        
}

export default EventInform;