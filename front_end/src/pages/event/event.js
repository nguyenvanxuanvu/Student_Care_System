import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import "./event.css";
import event from '../../images/event.jpg'
import axios from "axios";
const Event = () => {
  const [listEvents, setlistEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/event").then(function (response) {
      setlistEvents(response.data);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            <h3>Thông tin sự kiện</h3>
        
<div class="row pt-3 ps-2 pe-2">
          {listEvents.map((comment, key) => {
            return (
              
                <div class="col-lg-6  pt-5">
                  <InforCard img={event} id={comment.ID} name={comment.EventName} content={comment.Organizer}/>
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
