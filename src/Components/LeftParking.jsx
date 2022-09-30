import React from "react";
export default function LeftParking(props) {
  return (
    <div className="h-[22%] w-[90%] flex border-[1px] border-[#424554] border-r-0">
      <button className="w-8 bg-[#3278fd] border-none">X</button>
      <ul>
        <li>{props.modelo}</li>
        <li>{props.placa}</li>
        <li>{props.veiculo}</li>
        <li>{props.tempo}</li>
      </ul>
    </div>
  );
}
