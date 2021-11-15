import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard";
import { useEffect, useState } from "react";
import "./job.css";
import job from "../../images/job.jpg";
import axios from "axios";
const Job = () => {
  const [listJob, setlistJob] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/job").then(function (response) {
      setlistJob(response.data);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            <h3>Việc làm</h3>

            <div class="row pt-3 ps-2 pe-2">
              {listJob.map((comment, key) => {
                return (
                  <div class="col-lg-6  pt-5">
                    <InforCard
                      img={job}
                      id={comment.ID}
                      name={comment.JobName}
                      content={comment.Company}
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
