import React from "react";

export const Error = ({mensaje}) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      {mensaje}
    </div>
  );
};
