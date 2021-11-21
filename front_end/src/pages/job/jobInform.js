import React, { Component } from 'react';
import '../Inform.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import Righthome from '../home/righthome';
import { useParams } from 'react-router';
import Moment from 'moment'
const JobInform = () =>  {
  const [listEvents, setlistEvents] = useState([]);
 let {id} = useParams();
  

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
      if (i.ID === id){
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
                  <h3>Đơn vị tuyển dụng</h3>
                  <p>{company}</p>
                </div>
                <div>
                  <h3>Yêu cầu công việc</h3>
                  <ul>
                    <li>{phonenum}</li>
                  </ul>
                </div>
                <div>
                <h3>Thông tin liên lạc</h3>
                  <ul>
                    <li><strong>Địa chỉ</strong><p>{address}</p></li>
                    <li><strong>Số điện thoại</strong><p>{phonenum}</p></li>

                  </ul>
                </div>
                <div>
                  <h3>Thời gian</h3>
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
/*
import React, { Component } from 'react';
import "./job.css";

class JobInform extends React.Component{
  render(){
        return (
            <div className="page-container">
                <div className="page-content">
                    <h1>Advertising Operator</h1>
                </div>
                <div>
                  <h3>Đơn vị tuyển dụng:</h3>
                  <p>Ureka Việt Nam</p>
                </div>
                <div>
                  <h3>Yêu cầu công việc</h3>
                  <ul>
                    <li>Có tối thiểu 2 năm kinh nghiệm</li>
                    <li>Nắm rõ nghiệp vụ liên quan</li>
                  </ul>
                </div>
                <div>
                  <h3>Thông tin liên lạc</h3>
                  <ul>
                    <li><strong>Địa chỉ</strong><p>Thành phố Hồ Chí Minh</p></li>
                    <li><strong>Số điện thoại</strong><p>09845203154</p></li>

                  </ul>
                </div>
                <div>
                  <h3>Thời gian tuyển dụng</h3>
                  <p><strong>2021-09-01</strong> to <strong>2022-06-01</strong></p>
                </div>
            </div>
        );
        }
}

export default JobInform;

*/