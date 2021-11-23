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
        <div class="col-9">
        <div className="container mt-30">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Đánh giá của sinh viên</h3><br/>
                        </div>
                        <div className="panel-body">
                        {listRatings.map((comment, key) => {
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