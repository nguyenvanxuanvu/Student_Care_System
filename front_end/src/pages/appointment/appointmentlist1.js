import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'

import { NavLink } from 'react-router-dom';
import event from '../../images/event.jpg'
import axios from "axios";

const Appointmentlist1 = () => {
  const [listAppointments, setlist] = useState([]);
  const [state, setstate] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/appointment").then(function (response) {
      setlist(response.data[0]);
      
    });
  }, []);
   const setStatus = (x) => {
       if(x===0) return "Chưa được nhận"
       else return "Đã được nhận"
   }
   const handle = (a,b,c) => {
    var postData = {
        StudentID: a,
        Date: b,
        Time: c,
        CaringID: 'NV78374'
        
    };
    axios.post('/updateAppointment', postData)
    

    window.location.href = 'http://localhost:3001/appointmentlist1'

   }
   
    
  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            
        
          <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Sinh viên</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Giờ</th>
                    <th scope="col">Vấn đề</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Nhận cuộc hẹn</th>
                    </tr>
                </thead>
                <tbody>
                {listAppointments.sort((a,b)=>{
                return new Date(b.Date) - new Date(a.Date)})
                .map((appoint,idx) => {
                        
                        return(
                            <tr>
                                <td>{appoint.StudentID}</td>
                                <td>{new Date(appoint.Date).toLocaleDateString()}</td>
                                <td>{appoint.Time}</td>
                                <td>{appoint.Problem}</td>
                                <td>{setStatus(appoint.Status)}</td>
                              
                                {appoint.Status === 1 && ()</td>)}
                                {appoint.Status === 0 && (<td>{<div  class="btn btn-primary"> Nhận </div>}</td>)}
                               
                            </tr>
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
