import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'

import { NavLink } from 'react-router-dom';
import event from '../../images/event.jpg'
import axios from "axios";
import CallCard from "./CallCard";
import React, { Component } from 'react';

const ListCall = () => {
  const [listCalls, setlist] = useState([]);
  const [state, setstate] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/callhistory").then(function (response) {
      setlist(response.data[0]);
      
    });
  }, []);
   
   




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
                  return (new Date(b.Time) - new Date(a.Time))
                })
                .map((call) => {
                        return(
                            <CallCard CallID = {call.CallID} Status = {call.Status} StudentID = {call.StudentID} Time = {call.Time} Problem = {call.Topic} />
                        );
                    })}
                </tbody>
            </table>
    </div>
  );
};

export default ListCall;