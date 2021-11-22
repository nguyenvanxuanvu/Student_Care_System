import Righthome from "../home/righthome";
import "./user.css";
import { useEffect, useState }  from "react";
import axios from "axios";
import Moment from 'moment'

const RepreInfo = () => {
    const [repre,setRepre] = useState([])
    let id = localStorage.getItem("userid");
    useEffect(() => {
        axios.get("http://localhost:3000/representInfo/" ,{params: {id:id}}).then(function (response) {
            setRepre(response.data[0]);
          })
        ;
        
      }, []);
      var Name;
      var PhoneNum;
  
  
    for (let i of repre){
        Name = i.Name;
       PhoneNum = i.PhoneNum;
       
          

      }
  return (
    <div className="row w-100">
    
      <div className="col-9 instruct ps-5 pb-5">
        
        <div className="pt-5 ps-5 pe-5 pb-5">
        <h3 className="pt-3">THÔNG TIN NGƯỜI ĐẠI DIỆN CỦA SINH VIÊN</h3>
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Họ và tên:
                    <p>{Name}</p>
                </li>
                <li class="list-group-item">Số điện thoại:
                    <p>{PhoneNum}</p>
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

export default RepreInfo;