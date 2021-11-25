import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'

import { NavLink } from 'react-router-dom';
import event from '../../images/event.jpg'
import axios from "axios";

import React, { Component } from 'react';

const ListCall = () => {
  const [listCalls, setlist] = useState([]);
  const [state, setstate] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/callhistory").then(function (response) {
      setlist(response.data[0]);
      
    });
  }, []);
   
   
   const onHandleChange0 = (call) =>{
    var postData = {
        CallID: call.CallID,
        Status: 1        
    };
    axios.post('/updateCall', postData)    

   };



  return (
    <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">{localStorage.getItem("language")?"MSSV":"StudentID"}</th>
                    <th scope="col">{localStorage.getItem("language")?"Thời gian":"Time"}</th>
                    <th scope="col">{localStorage.getItem("language")?"Vấn đề":"Problem"}</th>
                    <th scope="col">{localStorage.getItem("language")?"Trạng thái":"Status"}</th>
                    </tr>
                </thead>
                <tbody>
                {listCalls.sort((a,b)=>{
                  return (a.Status - b.Status)
                })
                .map((call,idx) => {
                        return(
                            <tr>
                                <td>{call.StudentID}</td>
                                <td>{Moment(call.Time).utcOffset('+07:00').format("DD/MM/YYYY HH:mm:ss")}</td>
                                <td>{call.Topic}</td>

                                {call.Status === 0 && (<td>{<button className="btn btn-outline-danger" onClick={onHandleChange0(call)}>{localStorage.getItem("language")?"Chưa giải quyết":"Unresolved"}</button>}</td>)}
                                {call.Status === 1 && (<td>{<button className="btn btn-outline-success">{localStorage.getItem("language")?"Đã giải quyết":"Resolved"}</button>}</td>)}
                               
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
  );
};

export default ListCall;