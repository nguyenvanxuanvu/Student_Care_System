import React from "react";
import "./Abovehome.css";
import { BsSearch } from "react-icons/all";
import "./righthome.css";
import axios from "axios";
import { useEffect, useState } from "react";
import scholarship from "../../images/scholarship.png";
import job from "../../images/job.jpg";
import news from "../../images/news.jpg";
import event from "../../images/event.jpg";
import Informationcard from "./informationcard";
import Moment from 'moment'
import { removeVI, DefaultOption } from "jsrmvi";
const Righthome = () => {
  var listAll = [];

  const [listJob, setlistJob] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/job").then(function (response) {
      setlistJob(response.data[0]);
    });
  }, []);

  const [listEvents, setlistEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/event").then(function (response) {
      setlistEvents(response.data[0]);
    });
  }, []);

  const [listNews, setlistNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/news").then(function (response) {
      setlistNews(response.data[0]);
    });
  }, []);

  const [listScholarship, setlistScholarship] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/scholarship").then(function (response) {
      setlistScholarship(response.data[0]);
    });
  }, []);

  listJob.map((comment, key) => {
    let each = {
      img: job,
      ID: comment.ID,
      name: comment.JobName,
      content: comment.Company,
      date : comment.AddDay,
    };
    listAll.push(each);
  });

  listEvents.map((comment, key) => {
    let each = {
      img: event,
      ID: comment.ID,
      name: comment.EventName,
      content: comment.Organizer,
      date : comment.AddDay,
    };
    listAll.push(each);
  });

  listNews.map((comment, key) => {
    let each = {
      img: news,
      ID: comment.ID,
      name: comment.Title,
      content: comment.Author,
      date : comment.AddDay,
    };
    listAll.push(each);
  });

  listScholarship.map((comment, key) => {
    let each = {
      img: scholarship,
      ID: comment.ID,
      name: comment.Name,
      content: comment.Scope,
      date : comment.AddDay,
    };
    listAll.push(each);
  });
  
  
   listAll.sort((a,b)=>{
      return new Date(b.date) - new Date(a.date)
      
   })
  // filter
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const [flag, setFlag] = useState("");

  const handleFilter = (event) => {
    setFlag(true)
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
    const newFilter = listAll.filter((value) => {
      return (
        (removeVI(value.name)).toLowerCase().includes(removeVI(searchWord.toLowerCase())) 
        || (removeVI(value.content)).toLowerCase().includes(removeVI(searchWord.toLowerCase())) 
        
      );
    });

    if (searchWord === "") {
      setFilteredData(listAll);
     
    } else {
      setFilteredData(newFilter);
      
    }
  };

  return (
    
        
      
    <div class="col">
      <div>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">
            {<BsSearch />}
          </span>
          <input
            type="search"
            placeholder={"Tìm kiếm"}
            value={wordEntered}
            onChange={handleFilter}
            class="form-control rounded"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>

        <div class="pt-2"></div>
        <h6>Mới ...</h6>
        <div class="scrollbar align-items-center  ps-2 pe-2">

          
        { flag && ( filteredData.map((comment, key) => {
            return (
              <div class="col-lg-6 pt-2">
                <Informationcard
                  img={comment.img}
                  id={comment.ID}
                  name={comment.name}
                  content={comment.content}
                  date={Moment(comment.date).utcOffset('+07:00')
                  .format('DD/MM/YYYY')}
                />
              </div>
            );
          }))}

{ !flag && ( listAll.map((comment, key) => {
            return (
              <div class="col-lg-6 pt-2">
                <Informationcard
                  img={comment.img}
                  id={comment.ID}
                  name={comment.name}
                  content={comment.content}
                  date={Moment(comment.date).utcOffset('+07:00')
                  .format('DD/MM/YYYY')}
                />
              </div>
            );
          }))}
          <div class="pt-3"></div>
        </div>
      </div>
    </div>
    
  );
};

export default Righthome;
