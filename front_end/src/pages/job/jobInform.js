import React, { Component } from 'react';
import '../Inform.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import Righthome from '../home/righthome';
import { useParams } from 'react-router';
import Moment from 'moment'
const JobInform = () =>  {
  const [listEvents, setlistEvents] = useState([]);
  const [listJobRequire, setlistJobRequire] = useState([]);

  let {id} = useParams();
  
  useEffect(() => {
    axios.get("http://localhost:3000/j_requires", {params: {id:id}}).then(function (response) {
      setlistJobRequire(response.data[0]);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/job/" ,{params: {id:id}}).then(function (response) {
      setlistEvents(response.data[0]);
      })
    ;
  }, []);
  var name;
  var company;
  var description;
  var address;
  var startTime;
  var endTime;
  var phonenum;
  var addDay;
    for (let i of listEvents){
      if (i.ID.toString() === id){
          name = i.JobName;
          company = i.Company;
          phonenum = i.PhoneNum;
          address = i.Address;
          startTime = i.SDate;
          endTime = i.EDate;
          addDay = i.AddDay;

      }
    }
        
          return (
            <div class="row w-100 ps-5">
            <div class="col-9 pt-4 ps-5 ">
            <div className="page-container">
                <div className="page-content">
                    <h1>{name}</h1>
                    
                    
                </div>
                <div>
                  <h4>{localStorage.getItem("language")? "Đơn vị tuyển dụng":"Recruitment agency"}</h4>
                  <p>{company}</p>
                </div>
                <div>
                  <h4>{localStorage.getItem("language")? "Yêu cầu công việc":"Job requirements"}</h4>
                  <div>
                  {listJobRequire.map((comment, key) => {
                  return (
                    <div>
                      <ul>
                        <li>{comment.ARequirement}</li>
                      </ul>
                    </div>
                  );
                })}
                </div>
                </div>
                <div>
                <h4>{localStorage.getItem("language")? "Thông tin liên lạc":"Contact information"}</h4>
                  <ul>
                    <li><strong>{localStorage.getItem("language")? "Địa chỉ":"Address"}</strong><p>{address}</p></li>
                    <li><strong>{localStorage.getItem("language")? "Số điện thoại":"Phone number"}</strong><p>{phonenum}</p></li>

                  </ul>
                </div>
                <div>
                  <h4>{localStorage.getItem("language")? "Thời gian tuyển dụng":"Recruitment time"}</h4>
                  <p><strong>{Moment(startTime).utcOffset('+07:00')
                        .format("DD/MM/YYYY")}</strong> {localStorage.getItem("language")? "đến":"to"} <strong>{Moment(endTime).utcOffset('+07:00')
                  .format("DD/MM/YYYY")}</strong></p>
                </div>
            </div>
            </div>
            <div class="col-2">
            <Righthome />
          </div>
          </div>
        );
        
}

export default JobInform;