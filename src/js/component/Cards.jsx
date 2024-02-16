import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

let Clock = <FontAwesomeIcon icon={faClock} />;

function Cards(props) {
  return (
    <>
      <div className="container bg-dark p-4">
        <div className="card border-0 ">
          <div className="card-body bg-dark text-white text-center">
            <h1 className="display-1 fw-bolder">
              {props.icon == true ? Clock : props.num}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
