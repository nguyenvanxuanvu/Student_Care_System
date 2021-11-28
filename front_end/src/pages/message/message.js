import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'
import React from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { fontWeight } from "@mui/system";


const Message = () => {
  const [listMessage, setlist] = useState([]);
  const [subject,setsubject] = useState('');
  const [content,setcontent] = useState('');
  const [listReplies, setlist1] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const formatDate = (date) => {
    var ans = [];
    ans = date.split('/');
    return (ans[1]+'-'+ans[0]+'-'+ans[2]).toString();
}
  const formatDate1 = (date) => {
    var ans = [];
    ans = date.split('/');
    return (ans[2]+'-'+ans[0]+'-'+ans[1]).toString();
}
  const handleSent = () => {
    let studentID = localStorage.getItem("userid");
    var postData = {
        Subject : subject,
        Content: content,
        StudentID: studentID,
        Time:formatDate1( new Date().toLocaleDateString()),

        
    };
    axios.post('/sendMessage', postData)
            .then()
            .catch((err) => alert('failure'));

            window.location.href = 'http://localhost:3001/message'
        alert('Gửi tin nhắn thành công')
  };



  useEffect(() => {
    axios.get("http://localhost:3000/getmessage").then(function (response) {
      setlist(response.data[0]);
      
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/getreplies").then(function (response) {
      setlist1(response.data[0]);
      
    });
  }, []);
   
  const getReplies = (id) => {
    for (let i of listReplies){
        if (i.MessageID === id){
            return i.Content;
        }
    }
    return 'Chưa trả lời';
}
    
  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
           
          <div>
     
     <Dialog open={open} onClose={handleClose}>
     
     {localStorage.getItem("language") && (<DialogTitle>Gửi tin nhắn</DialogTitle>)}
     {!localStorage.getItem("language") && (<DialogTitle>Send message</DialogTitle>)}
       <DialogContent>
         {localStorage.getItem("language") &&
         (<TextField
           autoFocus
           margin="dense"
           id="subject"
           label="Chủ đề"
           type="email"
           fullWidth
           variant="standard"
           onChange = {(event) => setsubject(event.target.value)}
         />)}

          {!localStorage.getItem("language") &&
         (<TextField
           autoFocus
           margin="dense"
           id="subject"
           label="Subject"
           type="email"
           fullWidth
           variant="standard"
           onChange = {(event) => setsubject(event.target.value)}
         />)}
        {localStorage.getItem("language") &&
         ( <TextField
           autoFocus
           margin="dense"
           id="content"
           label="Nội dung"
           type="email"
           fullWidth
           variant="standard"
           onChange = {(event) => setcontent(event.target.value)}
         />)}
         {!localStorage.getItem("language") &&
         ( <TextField
           autoFocus
           margin="dense"
           id="content"
           label="Content"
           type="email"
           fullWidth
           variant="standard"
           onChange = {(event) => setcontent(event.target.value)}
         />)}
       </DialogContent>
       {localStorage.getItem("language") && (<DialogActions>
         <Button onClick={handleClose}>Hủy</Button>
         <Button onClick={handleSent} type="submit">Gửi</Button>
       </DialogActions> )}
       {!localStorage.getItem("language") && (<DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button onClick={handleSent} type="submit">Send</Button>
       </DialogActions> )}
     </Dialog>


</div>
          <div class="row">
            <div class="col">
          {localStorage.getItem("language") && (<h3>Tin nhắn của tôi</h3>)}
          {!localStorage.getItem("language") && (<h3>My messages</h3>)}
          </div>
          <div class="col ps-5">
          {localStorage.getItem("language") && (<div class="btn btn-primary" onClick={handleClickOpen}>Gửi tin nhắn mới</div>)}
          {!localStorage.getItem("language") && (<div class="btn btn-primary" onClick={handleClickOpen}>Send new message</div>)}
          </div>
          </div>
          <table class="table">
                {localStorage.getItem("language") && (<thead>
                    <tr>
                    <th scope="col">Ngày</th>
                    <th scope="col">Chủ đề</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Câu trả lời</th>
                    </tr>
                </thead>)}
                {!localStorage.getItem("language") && (<thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Content</th>
                    <th scope="col">Reply</th>
                    </tr>
                </thead>)}
                <tbody>
                {listMessage.sort((a,b)=>{
                return new Date(b.Date) - new Date(a.Date)})
                .map(message => {
                    if(message.StudentID === localStorage.getItem("userid"))
                        return(
                            <tr>
                               
                                <td>{formatDate(new Date(message.Date).toLocaleDateString())}</td>
                                <td>{message.Subject}</td>
                                <td>{message.Content}</td>
                                {getReplies(message.ID)==="Chưa trả lời" && (<td>{localStorage.getItem("language")?'Chưa được trả lời':'Unanswered'}</td>)}
                                {getReplies(message.ID)!=="Chưa trả lời" && (<td>{<div style={{color:"#26e97e "}}>{getReplies(message.ID)}</div>}</td>)}
                            </tr>
                        )
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

export default Message;
