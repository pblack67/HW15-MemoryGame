import React from "react";
import "./style.css";

function FriendCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={"Whoops"} src={props.image} onClick={() => {props.clickHandler(props.id)}}/>
        </div>
      </div>
    );
  }

  export default FriendCard;
