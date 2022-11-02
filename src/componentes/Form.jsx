import {useState} from "react";
import { useForm } from "../hooks/useForm";
import { Error } from "./Error";

export const Form = () => {

  const [error, setError] = useState(false);

  const { values, handleInputChange, Reset } = useForm({
    coordenadas: "",
  });

  const { coordenadas } = values;

  const handleSubmit = async(e) => {
    e.preventDefault();

    //console.log(values);
    if (coordenadas.includes('')) {

        setError(true);

        return;
    }
    
      const result = await fetch("http://127.0.0.1:8000/api/final-position", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });


      Reset();
    };


  return (
    <>
      <h2 className="mt-5 text-center">Cargar Posicion Final</h2>
      <form
        className="shadow-lg p-3 mb-5 bg-white rounded"
        onSubmit={handleSubmit}
      >
          {
              error &&  <Error mensaje='el campo coordenadas tiene que estar completo'/>
                
            }
        <input
          className="form-control"
          placeholder="agregar coordenadas"
          name="coordenadas"
          value={coordenadas}
          onChange={handleInputChange}
        />

        <div className="form-group mt-5">
          <input
            type="submit"
            className="form-control btn btn-primary"
            value="guardar"
          />
        </div>
      </form>
    </>
  )
  }
