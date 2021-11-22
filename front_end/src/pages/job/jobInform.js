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
                  <h4>Đơn vị tuyển dụng</h4>
                  <p>{company}</p>
                </div>
                <div>
                  <h4>Yêu cầu công việc</h4>
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
                <h4>Thông tin liên lạc</h4>
                  <ul>
                    <li><strong>Địa chỉ</strong><p>{address}</p></li>
                    <li><strong>Số điện thoại</strong><p>{phonenum}</p></li>

                  </ul>
                </div>
                <div>
                  <h4>Thời gian</h4>
                  <p><strong>{Moment(startTime).utcOffset('+07:00')
                        .format("DD/MM/YYYY")}</strong> đến <strong>{Moment(endTime).utcOffset('+07:00')
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