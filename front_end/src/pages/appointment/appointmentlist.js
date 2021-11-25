import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'

import { NavLink } from 'react-router-dom';
import event from '../../images/event.jpg'
import axios from "axios";

const Appointmentlist = () => {
  const [listAppointments, setlist] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/appointment").then(function (response) {
      setlist(response.data[0]);
      
    });
  }, []);
   const setStatus = (x) => {
       if(x===0) return "Chưa được nhận"
       else return "Đã được nhận"
   }
   const formatDate = (date) => {
    var ans = [];
    ans = date.split('/');
    return (ans[1]+'-'+ans[0]+'-'+ans[2]).toString();
}
    
  return (
    <div class="row w-100">
      <div class="col-9">
        
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
        
          <div class="pt-3 ps-5">
          <div class="row">
            <div class="col">
          {localStorage.getItem("language") && (<h3>Cuộc hẹn của tôi</h3>)}
          {!localStorage.getItem("language") && (<h3>My appointment</h3>)}
          </div>
          <div class="col ps-5">
          {localStorage.getItem("language") && (<NavLink to="/appointmentform" class="btn btn-primary"> Tạo cuộc hẹn mới</NavLink>)}
          {!localStorage.getItem("language") && (<NavLink to="/appointmentform" class="btn btn-primary"> Make new appointment</NavLink>)}
          </div>
          </div>
        
          <table class="table">
          {localStorage.getItem("language") && ( <thead>
                    <tr>
                    <th scope="col">Ngày</th>
                    <th scope="col">Giờ</th>
                    <th scope="col">Vấn đề</th>
                    <th scope="col">Trạng thái</th>
                    </tr>
                </thead>)}

                {!localStorage.getItem("language") && ( <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Problem</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>)}
                <tbody>
                {listAppointments.sort((a,b)=>{
                return new Date(b.Date) - new Date(a.Date)})
                .map(appoint => {
                    if(appoint.StudentID === localStorage.getItem("userid"))
                        return(
                            <tr>
                               
                                <td>{formatDate(new Date(appoint.Date).toLocaleDateString())}</td>
                                <td>{appoint.Time}</td>
                                <td>{appoint.Problem}</td>
                               {setStatus(appoint.Status)==="Đã được nhận" && ( <td style={{color:"#26e97e "}}>{setStatus(appoint.Status)}</td>)}
                               {setStatus(appoint.Status)!=="Đã được nhận" && ( <td style={{fontWeight:"bold"}}>{setStatus(appoint.Status)}</td>)}
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

export default Appointmentlist;
