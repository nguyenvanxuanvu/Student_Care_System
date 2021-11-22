import React, { Component } from 'react';
import '../Inform.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import Righthome from '../home/righthome';
import { useParams } from 'react-router';
import Moment from 'moment'

const ScholarInform = () =>  {
  const [listEvents, setlistEvents] = useState([]);
  const [listScholarshipRequire, setlistScholarshipRequire] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/s_requires", {params: {id:id}}).then(function (response) {
      setlistScholarshipRequire(response.data[0]);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/scholarship" ,{params: {id:id}}).then(function (response) {
      setlistEvents(response.data[0]);
      })
    ;
  }, []);
  var name;
  var scope;
  var value;
  var startTime;
  var endTime;
  var addDay;

    for (let i of listEvents){
      if (i.ID.toString() === id){
          name = i.Name;
          scope = i.Scope;
          value = i.Value;
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
                <h3>Đối tượng:</h3>
                <p>{scope}</p>
              </div>
              <div>
                <h3>Yêu cầu:</h3>
                <div>
                  {listScholarshipRequire.map((comment, key) => {
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
                <h3>Trị giá</h3>
                <p>{value}</p>
              </div>
              <div>
                <h3>Thời gian</h3>
                <p><strong>{Moment(startTime).utcOffset('+07:00')
                  .format("DD/MM/YYYY")}</strong> to <strong>{Moment(endTime).utcOffset('+07:00')
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

export default ScholarInform;