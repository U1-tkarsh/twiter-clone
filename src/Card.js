import React from "react";

const Card = ({ displayName, username}) => {

  

  return (
    <div>
      
      <div className="card bg-dark m-md-3 m-lg-3 m-sm-3" style={{ width: "50em" }}>
        <div className="card-header">
          <div className="card-headerText">
            <h6 style= {{ color: "white" }}>
            utkarsh @raiutkarsh
            </h6>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text text-light ms-5 me-5" style= {{ color: "white" }}>
            {username}
          </p>
          <img src={displayName} className="card-img-top" alt="..."></img>

          <div><i className="fa-solid fa-trash"  ></i></div>
          <div className="card-text text-secondary bg-dark">
            <div className="date m-2" style={{ fontSize: "13px" }}>
              Jul 21,2022 - Bird Web App
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
