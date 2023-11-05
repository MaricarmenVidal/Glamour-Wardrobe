
import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial=1}) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire('Cantidad máxima!')
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };


  useEffect(() => {
    console.log("Se realizo una peticion");
  }, [ contador ] );

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;