import Righthome from "../home/righthome";
import "./user.css";
import { useEffect, useState }  from "react";
import axios from "axios";
import Moment from 'moment'
const UserInfo = () => {
    const [info,setInfo] = useState([])
    let id = localStorage.getItem("userid");
    useEffect(() => {
        axios.get("http://localhost:3000/studentInfo/" ,{params: {id:id}}).then(function (response) {
            setInfo(response.data[0]);
          })
        ;
        
      }, []);
      
  var Name;
  var DateOfBirth;
  var PhoneNum;
  var Address;
  var Email;
  var GPA;
  
    for (let i of info){
        Name = i.Name;
        DateOfBirth = i.DateOfBirth;
        PhoneNum = i.PhoneNum;
        Address = i.Address;
        Email = i.Email;
        GPA = i.GPA;
          

      }
    
  return (
    <div className="row w-100">
    
      <div className="col-9 instruct ps-5 pb-5">
        
        <div className="pt-5 ps-5 pe-5 pb-5">
        <h3 className="pt-3">{localStorage.getItem("language")?"THÔNG TIN SINH VIÊN":"STUDENT INFORMATION"}</h3>
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{localStorage.getItem("language")?"Họ và tên:":"Full name:"}
                    <p>{Name}</p>
                </li>
                <li class="list-group-item">{localStorage.getItem("language")?"MSSV:":"ID:"}
                    <p>{id}</p>
                </li>
                <li class="list-group-item">{localStorage.getItem("language")?"Ngày sinh:":"Date of birth:"}
                    <p>{Moment(DateOfBirth).utcOffset('+07:00')
                  .format('DD/MM/YYYY')}</p>
                </li>
                <li class="list-group-item">{localStorage.getItem("language")?"Số điện thoại:":"Phone number:"}
                    <p>{PhoneNum}</p>
                </li>
                <li class="list-group-item">{localStorage.getItem("language")?"Địa chỉ:":"Address:"}
                    <p>{Address}</p>
                </li>
                <li class="list-group-item">Email:
                    <p>{Email}</p>
                </li>
            </ul>
        </div>
        
      </div>
      </div>

      <div className="col-3">
        <Righthome />
      </div>
    </div>
   
  );
};

export default UserInfo;