import { useEffect, useState } from "react";
import { ItemMovimientos } from "./ItemMovimientos";

export const ListadoMovimiento = () => {
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/earth");
    const responseJson = await response.json();
    //console.log(responseJson);
    setTodos(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="justify-content-center">
      {todos ? (
        <>
          <h2 className="text-center">Listado Movimiento</h2>

          {todos.map((item) => (
            <ItemMovimientos item={item}  />
          ))}

          <button className="btn btn-primary mt-5" onClick={fetchApi}>
            Consultar Movimiento
          </button>
        </>
      ) : (
        <>
          <h2 className="text-center">No hay Movimientos</h2>
        </>
      )}
    </div>
  );
};
