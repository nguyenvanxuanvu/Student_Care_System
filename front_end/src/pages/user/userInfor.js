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
        <h3 className="pt-3">THÔNG TIN SINH VIÊN</h3>
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Họ và tên:
                    <p>{Name}</p>
                </li>
                <li class="list-group-item">MSSV:
                    <p>{id}</p>
                </li>
                <li class="list-group-item">Ngày sinh:
                    <p>{Moment(DateOfBirth).utcOffset('+07:00')
                  .format('DD/MM/YYYY')}</p>
                </li>
                <li class="list-group-item">Số điện thoại:
                    <p>{PhoneNum}</p>
                </li>
                <li class="list-group-item">Địa chỉ:
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