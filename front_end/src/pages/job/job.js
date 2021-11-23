import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard";
import { useEffect, useState } from "react";
import "./job.css";
import job from "../../images/job.jpg";
import axios from "axios";
import Moment from 'moment'
const Job = () => {
  const [listJob, setlistJob] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/job").then(function (response) {
      setlistJob(response.data[0]);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            {localStorage.getItem("language") && (<h3>Việc làm</h3>)}
            {!localStorage.getItem("language") && (<h3>Job</h3>)}

            <a class="btn btn-warning" href="/jobform" role="button"> + Thêm việc làm</a>

            <div class="row pt-3 ps-2 pe-2">
              {listJob.map((comment, key) => {
                return (
                  <div class="col-lg-6  pt-5">
                    <InforCard
                      link={"/job/"}
                      img={job}
                      id={comment.ID}
                      name={comment.JobName}
                      content={comment.Company}
                      date={Moment(comment.AddDay).utcOffset('+07:00')
                  .format('DD/MM/YYYY')}
                    />
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

export default Job;
