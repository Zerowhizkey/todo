import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

function PiriList(props) {
  

  return (
    <div>
      
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "done" : ""}>
              {item.name} 
               <button value={item.id} onClick={props.checkListItem}>
                 <AiOutlineCheckCircle className="check-icon" />
               </button>
              <button value={item.id} onClick={props.removeListItem} >
                <RiCloseCircleLine className="delete-icon" />
              </button>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PiriList;
