
import React from "react"
import './inforCard.css'
import { NavLink } from "react-router-dom";
const InforCard= (props) => {
    return(
        
<div class="card inforcard">

  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
      <div class='card_content'>
    <h5 style={{fontSize: "29px"}} class="card-title">{props.name}</h5>
    <p style={{fontSize: "20px"}} class="card-text">{props.content}</p>
    <p style={{fontSize: "15px"}} class="card-text"><i>{props.date}</i></p>
    <div class="button-fix">
    <NavLink to={props.link + props.id} class="btn btn-primary"> Xem chi tiết </NavLink>
  </div>
  </div>
  
</div>
</div>

    );
}

export default InforCard