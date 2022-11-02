import React from "react";

export const ItemMovimientos = ({ item }) => {
  //console.log(item);
  return (

      <div className="bg-white shadow-lg">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {item}
          </li>
        </ul>
      </div>
    
  );
};
