import React from "react";
import { Header } from "./componentes/Header";
import { CargaPositionFinish } from "./componentes/Movimiento/CargaPositionFinish";
import { ListadoMovimiento } from "./componentes/Movimiento/ListadoMovimiento";

export const Movimiento = () => {
  return (
    <div>
      <Header />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ListadoMovimiento />
          </div>
          <div className="col-md-6">
            <CargaPositionFinish />
          </div>
        </div>
      </div>
    </div>
  );
};
