
import background from '../../images/background.png'
import news from '../../images/news.jpg'
import React from "react"
import { NavLink } from 'react-router-dom'
import './informationcard.css'
const Informationcard= (props) => {
    return(
        
<div class="card right">

  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
      <div class='card_content'>
    <h5 style={{fontSize: "24px"}} class="card-title">{props.name}</h5>
    <p style={{fontSize: "17px"}} class="card-text">{props.content}</p>
    <p style={{fontSize: "14px"}} class="card-text"><i>{props.date}</i></p>
    <div class="button-fix pt-3">
    
    {localStorage.getItem("language") && (<NavLink to={props.link + props.id} class="btn btn-primary"> Xem chi tiết </NavLink>)}
    {!localStorage.getItem("language") && (<NavLink to={props.link + props.id} class="btn btn-primary"> Details </NavLink>)}
  </div>
  </div>
  
</div>
</div>

    );
}

export default Informationcard