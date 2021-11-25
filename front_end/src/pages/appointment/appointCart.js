import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'
import axios from "axios";
import './appointcard.css'
const AppointCard = (props) => {
    const formatDate1 = (date) => {
            var ans = [];
            ans = date.split('/');
            return (ans[2]+'-'+ans[0]+'-'+ans[1]).toString();
    }
    const formatDate2 = (date) => {
        var ans = [];
        ans = date.split('/');
        return (ans[1]+'-'+ans[0]+'-'+ans[2]).toString();
}
    const handle = () => {
        let caringid = localStorage.getItem("userid");
        var postData = {
            StudentID: props.StudentID,
            Date: formatDate1(new Date(props.Date).toLocaleDateString()),
            Time: props.Time,
            CaringID: caringid
            
        };
        axios.post('/updateAppointment', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/appointmentlist1'
            alert('Nhận lịch hẹn thành công')
    
       }
  
    
  return (
    
               
             <>      
                {/* <h3>{ formatDate1(new Date(props.Date).toLocaleDateString()) }   </h3> */}
            <tr>
                               
                <td>{props.StudentID}</td>
                <td>{formatDate2(new Date(props.Date).toLocaleDateString())}</td>
                <td>{props.Time}</td>
                <td>{props.Problem}</td>
                {localStorage.getItem("language") && props.status===0 && (<button type="submit" className="btn btn-outline-danger" onClick={handle}>Nhận</button>)}
                {!localStorage.getItem("language") && props.status===0 && (<button type="submit" className="btn btn-outline-danger" onClick={handle}>Get</button>)}
                {localStorage.getItem("language") && props.status===1 && (<div>Đã được nhận</div>)}
                {!localStorage.getItem("language") && props.status===1 && (<div>Already accepted</div>)}
            </tr>
            
              </> 





   

    
  );
};

export default AppointCard;
