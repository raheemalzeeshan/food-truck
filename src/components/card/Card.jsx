import React from "react";
import Button from "../button/Button";
import "../../assets/css/card.css";

export default function Card(props) {
  return (
    
      <div className="card">
        <div className="card-media">
          <img src={props.cardImage} alt={props.cardImage_altText} />
        </div>
        <div className="card-content">
          <h3>{props.cardTitle}</h3>
          <p>
          {props.cardDescription}
          </p>
          <Button link={props.card_btnLink} class="btn btn-outline--dark" btnName={props.cardbtn_name} />
        </div>
      </div> 

  );
}
