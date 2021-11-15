
import background from '../../images/background.png'
import news from '../../images/news.jpg'
import React from "react"
import './informationcard.css'
const Informationcard= (props) => {
    return(
        
<div class="card right">

  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
      <div class='card_content'>
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.content}</p>
    <div class="button-fix">
    <a href="#" class="btn btn-primary">Xem chi tiết</a>
  </div>
  </div>
  
</div>
</div>

    );
}

export default Informationcard