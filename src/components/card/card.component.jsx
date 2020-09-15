import React from "react";
import "./card.styles.css";


export const Card = ({user}) => (
  <div className="card-container">
    <img src={`https://robohash.org/${user.id}?set=set4&size=360x360`} alt={`${user.name}`}/>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);
