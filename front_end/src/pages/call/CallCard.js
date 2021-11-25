import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'

import { NavLink } from 'react-router-dom';
import event from '../../images/event.jpg'
import axios from "axios";

const CallCard = (props) => {

   const onHandleChange0 = (call) =>{
    var postData = {
        CallID: props.CallID,
        Status: true,        
    };
    axios.post('/updateCall', postData).then()
    .catch((err) => alert('failure'));

    window.location.href = 'http://localhost:3001/addCall'
      alert('Cập nhật tình trạng cuộc gọi thành công')    

   };

    return (
        <tr>
                                <td>{props.StudentID}</td>
                                <td>{Moment(props.Time).utcOffset('+07:00').format("DD/MM/YYYY HH:mm:ss")}</td>
                                <td>{props.Problem}</td>

                                {props.Status===0 && (<td>{<button onClick={onHandleChange0} className="btn btn-outline-danger" >{localStorage.getItem("language")?"Giải quyết":"Resolve"}</button>}</td>)}
                                {props.Status===1 && (<td>{<button className="btn btn-outline-success">{localStorage.getItem("language")?"Đã giải quyết":"Resolved"}</button>}</td>)}
                               
                            </tr>
    )

}
export default CallCard