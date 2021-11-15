import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard"
import { useEffect, useState } from "react";
import "./scholarship.css";
import scholarship from '../../images/scholarship.png'
import axios from "axios";
const News = () => {
  const [listScholarship, setlistScholarship] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/scholarship").then(function (response) {
      setlistScholarship(response.data);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            <h3>Học bổng</h3>
        
<div class="row pt-3 ps-2 pe-2">
          {listScholarship.map((comment, key) => {
            return (
              
                <div class="col-lg-6  pt-5">
                  <InforCard img={scholarship} id={comment.ID} name={comment.Name} content={comment.Scope}/>
                </div>
               
              
            );
          })}
        </div>
      </div>
      </div>
      </div>

      <div class="col-2">
        <Righthome />
      </div>
    </div>
  );
};

export default News;