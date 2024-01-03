"use client";
import { UniqueBombero } from "@/types/props";

function Bombero({ Bombero }: UniqueBombero) {
  console.log("--------------------------------------");

  console.log(Bombero.disponibilidad);

  const disponibilidadHandler = (event: any) => {
    console.log(event, event.target.value);
    //Value o label(?)
  };
  return (
    <div key={Bombero.movil}>
      <span> {Bombero.movil}</span>
      <select
        id={Bombero.movil}
        onChange={disponibilidadHandler}
        defaultValue={Bombero.disponibilidad}
      >
        <optgroup label="Cambiar de Disponibilidad">
          <option
            value="Disponible"
            selected={"Disponible" === Bombero.disponibilidad}
            disabled={"Disponible" === Bombero.disponibilidad}
          >
            Disponible
          </option>
          <option
            value="En Reserva"
            disabled={"En Reserva" === Bombero.disponibilidad}
            selected={"En Reserva" === Bombero.disponibilidad}
          >
            En Reserva
          </option>
          <option
            value="No Disponible"
            disabled={"No Disponible" === Bombero.disponibilidad}
            selected={"No Disponible" === Bombero.disponibilidad}
          >
            No Disponible
          </option>
          <option
            value="En base"
            disabled={"En Base" === Bombero.disponibilidad}
            selected={"En Base" === Bombero.disponibilidad}
          >
            En base
          </option>
          <option
            value="En servicio"
            disabled={"En Servicio" === Bombero.disponibilidad}
            selected={"En Servicio" === Bombero.disponibilidad}
          >
            En servicio
          </option>
        </optgroup>
      </select>
    </div>
  );
}

export default Bombero;
