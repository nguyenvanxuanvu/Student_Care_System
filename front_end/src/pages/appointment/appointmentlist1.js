import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'

import axios from "axios";
import AppointCard from "./appointCart";

const Appointmentlist1 = () => {
  const [listAppointments, setlist] = useState([]);
  const [state, setstate] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/appointment").then(function (response) {
      setlist(response.data[0]);
      
    });
  }, []);
   
   
   
    
  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
         {localStorage.getItem("language") && (<h3>Lịch hẹn của sinh viên</h3>)}
         {!localStorage.getItem("language") && (<h3>Student 's appointment</h3>)}
        
          <table class="table">
                {localStorage.getItem("language") && (<thead>
                    <tr>
                    <th scope="col">Sinh viên</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Giờ</th>
                    <th scope="col">Vấn đề</th>
                    
                    <th scope="col">Nhận cuộc hẹn</th>
                    </tr>
                </thead>)}
                {!localStorage.getItem("language") && (<thead>
                    <tr>
                    <th scope="col">Student</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Problem</th>
                    
                    <th scope="col">Get appointment</th>
                    </tr>
                </thead>)}
                <tbody>
                {listAppointments.sort((a,b)=>{
                return new Date(b.Date) - new Date(a.Date)})
                .map((appoint,idx) => {
                        
                        return(
                            <AppointCard StudentID={appoint.StudentID} Date={appoint.Date} Time={appoint.Time} Problem={appoint.Problem} CaringID={localStorage.getItem("userid")} status={appoint.Status}/>
                        )
                    })}
                </tbody>
            </table>





      </div>
      </div>
      </div>

      <div class="col-2">
        <Righthome />
      </div>
    </div>
  );
};

export default Appointmentlist1;
