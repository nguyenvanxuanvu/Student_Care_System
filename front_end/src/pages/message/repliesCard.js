import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import Moment from 'moment'
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react";
import '../appointment/appointcard.css'
const RepliesCard = (props) => {
    const [listReplies, setlist1] = useState([]);
   
    const [content,setcontent] = useState('');
    const formatDate = (date) => {
        var ans = [];
        ans = date.split('/');
        return (ans[1]+'-'+ans[0]+'-'+ans[2]).toString();
    }
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
        
  
const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const formatDate1 = (date) => {
    var ans = [];
    ans = date.split('/');
    return (ans[2]+'-'+ans[0]+'-'+ans[1]).toString();
}
  const handleSent = () => {
    let caringID = localStorage.getItem("userid");
    var postData = {
        CaringID : caringID,
        MessageID: props.id,
        Content: content,
        Time:formatDate1( new Date().toLocaleDateString()),

        
    };

    
    axios.post('/sendReplies', postData)
            .then()
            .catch((err) => alert('failure'));

            window.location.href = 'http://localhost:3001/replies'
        alert('Gửi câu trả lời thành công')
  }
    
  
    
return (
    <>
  <tr>
                               
  <td>{formatDate(new Date(props.date).toLocaleDateString())}</td>
  <td>{props.subject}</td>
  <td>{props.content}</td>
    {getReplies(props.id)==="Chưa trả lời" && (<div className="btn btn-outline-danger" onClick={handleClickOpen}>Trả lời</div>)}
    {getReplies(props.id)!=="Chưa trả lời" && (<td>{getReplies(props.id)}</td>)}
  </tr>
  <div>
     
     <Dialog open={open} onClose={handleClose}>
     
      <DialogTitle>{localStorage.getItem("language")?"Trả lời":"Reply"}</DialogTitle>
       <DialogContent>
         
         
        
         <TextField
           autoFocus
           margin="dense"
           id="content"
           label={localStorage.getItem("language")?"Nội dung":"Content"}
           type="email"
           fullWidth
           variant="standard"
           onChange = {(event) => setcontent(event.target.value)}
         />
       </DialogContent>
       <DialogActions>
         <Button onClick={handleClose}>{localStorage.getItem("language")?"Hủy":"Cancel"}</Button>
         <Button onClick={handleSent} type="submit">{localStorage.getItem("language")?"Gửi":"Send"}</Button>
       </DialogActions> 
     </Dialog>


</div>
</>
);
};

export default RepliesCard;
