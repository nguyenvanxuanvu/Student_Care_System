import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import "./event.css";
import Moment from 'moment'
import { NavLink } from 'react-router-dom';
import event from '../../images/event.jpg'
import axios from "axios";
import EventInform from './eventInformation'
const Event = () => {
  const [listEvents, setlistEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/event").then(function (response) {
      setlistEvents(response.data[0]);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            {localStorage.getItem('language') && (<h3>Sự kiện</h3>)}
            {!localStorage.getItem('language') && (<h3>Event</h3>)}

            {localStorage.getItem('language') && localStorage.getItem("type2") && (<a class="btn btn-warning" href="/eventform" role="button"> + Thêm sự kiện</a>)}
            {!localStorage.getItem('language') && localStorage.getItem("type2") && (<a class="btn btn-warning" href="/eventform" role="button"> + Add event</a>)}

          <div class="row pt-3 ps-2 pe-2">
          {listEvents.sort((a,b)=>{return new Date(b.AddDay) - new Date(a.AddDay)}).map((comment, key) => {
            return (
              
                <div class="col-lg-6  pt-5">
                  
                  <InforCard link="/event/"  img={event} id={comment.ID} name={comment.EventName} content={comment.Organizer} date={Moment(comment.AddDay).utcOffset('+07:00')
                  .format('DD/MM/YYYY')}/>
                  
                </div>
               
              
            );
          })}
        </div>
      </div>
      </div>
      </div>

      <div class="col-2">
        <Righthome />
      </div>
    </div>
  );
};

export default Event;