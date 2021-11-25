import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard";
import { useEffect, useState } from "react";

import React from "react";

import RepliesCard from "./repliesCard";
import axios from "axios";

const Replies = () => {
  const [listMessage, setlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getmessage").then(function (response) {
      setlist(response.data[0]);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            <h2>{localStorage.getItem("language")?"Tin nhắn của sinh viên":"Student 's message"}</h2>
            <table class="table pt-3">
              <thead>
                <tr>
                  <th scope="col">{localStorage.getItem("language")?"Ngày":"Date"}</th>
                  <th scope="col">{localStorage.getItem("language")?"Chủ đề":"Subject"}</th>
                  <th scope="col">{localStorage.getItem("language")?"Nội dung":"Content"}</th>
                  <th scope="col">{localStorage.getItem("language")?"Câu trả lời":"Reply"}</th>
                  
                </tr>
              </thead>
              <tbody>
                {listMessage
                  .sort((a, b) => {
                    return new Date(b.Date) - new Date(a.Date);
                  })
                  .map((message) => {
                    return (
                      <RepliesCard
                        date={message.Date}
                        content={message.Content}
                        subject={message.Subject}
                        id={message.ID}
                        studentid={message.StudentID}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-2">
        <Righthome />
      </div>
    </div>
  );
};

export default Replies;
