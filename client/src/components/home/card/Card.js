import React from "react";
import "./card.css";
import { Parallax } from 'react-parallax';
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

function Card({ setmpost, setflag, flag, mpost }) {
  const view1 = useMediaQuery({ query: "(max-width: 564px)" });
  const navigate = useNavigate();
  const arr = ["tech", "Educatin","travel","finance","others"];

  return (
    <div className="intro_section">
      <Parallax className="parallax-img" bgClassName="bgimg" bgImage="/best.jpg" bgImageAlt="Blog Image" blur={4} strength={500}>
        <div className="dropdown">
          <button className="dropbtn">
            <div>{mpost[0].toUpperCase() + mpost.substr(1)}</div>
          </button>
          <div className="dropdown-content">
            {mpost !== "all" && (
              <div className="di" onClick={() => {
                setmpost("all"); setflag(false); navigate("/"); window.location.reload();
              }}>
                All
              </div>
            )}
            {arr.map((item, index) => (
              <div key={index} className="di" onClick={() => {
                setmpost(item); setflag(true); navigate(`/topic/${item}`); window.location.reload();
              }}>
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        <div className="text-container">
           <h1 className="card-text">Discover, Learn & Inspire</h1>
           <p className="card-text3" >
            A place to read, write, and deepen your understanding
           </p>
        </div>
      </Parallax>
      
    </div>
  );
}

export default Card;
