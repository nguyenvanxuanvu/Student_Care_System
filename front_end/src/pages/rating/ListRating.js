import Righthome from "../home/righthome";
import { useEffect, useState } from "react";
import Moment from 'moment'
import { NavLink } from 'react-router-dom';
import axios from "axios";

const ListRating = () => {
    const [listRatings, setlistRatings] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000/rating").then(function (response) {
        setlistRatings(response.data[0]);
      });
    }, []);
    return(
        <div class="row w-100">
        <div class="col-9 ps-5">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
        
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">{localStorage.getItem("language")?"Đánh giá của sinh viên":"Student 's rating sheet"}</h3><br/>
                        </div>
                        <div className="panel-body">
                        {listRatings.sort((a,b)=>{
                return new Date(b.CreateDate) - new Date(a.CreateDate)}).map((comment, key) => {
                            return (
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{comment.Content}</h5>
                                        <small>{Moment(comment.CreateDate).utcOffset('+07:00').format('DD/MM/YYYY')}</small>
                                        </div>
                                        <p class="mb-1">{comment.StudentID}</p>
                                    </a>
                                </div>         
                            );
                        })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-2">
        <Righthome />
      </div>
       
        </div>
        )
};

export default ListRating;