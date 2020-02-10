import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import Users from "../Users/Users";

const InfoBar = ({ room, users }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>Room: {room}</h3>
      <Users users={users}></Users>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close"></img>
      </a>
    </div>
  </div>
);
//1:44:53
export default InfoBar;
