


   
import React, { Component } from 'react';
import '../Inform.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import Righthome from '../home/righthome';
import { useParams } from 'react-router';
import Moment from 'moment'


const NewsInform = () =>  {
  const [listEvents, setlistEvents] = useState([]);
 let {id} = useParams();
  

  useEffect(() => {
    axios.get("http://localhost:3000/news" ,{params: {id:id}}).then(function (response) {
      setlistEvents(response.data[0]);
      })
    ;
  }, []);
  var topic;
  var title;
  var content;
  var author;
  var addDay;
    for (let i of listEvents){
      if (i.ID.toString() === id){
          topic = i.Topic;
          title = i.Title;
          content = i.Content;
          author = i.Author;
          addDay = i.AddDay;

      }
    }
        
          return (
            <div class="row w-100 ps-5">
                <div class="col-9 pt-4 ps-5 ">
                    <div className="page-container">
                        <div className="page-content">
                        {localStorage.getItem("language")?<p>{"Chủ đề: "+ topic}</p>:<p>{"Subject: "+ topic}</p>}
                            <h2>{title}</h2>
                        </div>
                        <div>
                            <p>{Moment(addDay).utcOffset("+07:00")
                        .format("DD/MM/YYYY")}</p>
                             <strong>{localStorage.getItem("language")?"Nội dung":"Content"}</strong>
                            <p>{content}</p>
                            <strong>{localStorage.getItem("language")?"Tác giả:":"Author:"}</strong> 
                            <p>{author}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <Righthome />
                </div>
            </div>                    
        );
        
}

export default NewsInform;
