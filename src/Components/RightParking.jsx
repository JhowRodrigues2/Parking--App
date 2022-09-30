import React from "react";
export default function RightParking(props) {
  return (
    <div className="h-[22%] w-[90%] flex border-[1px] border-[#424554] justify-end border-l-0">
      <button className="w-8 bg-[#3278fd] border-none">X</button>
      <ul>
        <li>{props.name}</li>
      </ul>
    </div>
  );
}
