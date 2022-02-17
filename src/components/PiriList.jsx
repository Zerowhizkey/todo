import React from "react";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";

function PiriList(props) {
  return (
    
      <ul className="ulSection">
        {props.items.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "done" : "notDone"}>
              {item.name}
              <div>
                <button
                  className="check-button"
                  value={item.id}
                  onClick={props.checkListItem}
                >
                  <BsCheckLg className="check-icon" />
                </button>
                <button
                  className="delete-button"
                  value={item.id}
                  onClick={props.removeListItem}
                >
                  <ImCross className="delete-icon" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
   
  );
}

export default PiriList;
