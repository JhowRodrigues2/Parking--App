import { useState } from "react";
import "./App.css";
import Logo from "./assets/logoimg.svg";
import Car from "./assets/carro.png";
import Moto from "./assets/moto.png";
import Truck from "./assets/caminhao.png";
import Bike from "./assets/bicicleta.png";
import { useEffect } from "react";
import LeftParking from "./Components/LeftParking";
import RightParking from "./Components/RightParking";

function App() {
  /*<span>{hours.toString().padStart(2, "0")}</span>
  <span>{minutes.toString().padStart(2, "0")}</span>*/
  const [carModel, setCarModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [time, setTime] = useState();
  const [data, setData] = useState([{}]);
  const [img, setImg] = useState("");
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  useEffect(() => {
    if (time === 0) {
      alert("Tempo acabou!"); //colocar a vaga no ALERT
      return;
    } else {
      setTimeout(() => {
        setTime(time - 1);
      }, 60000);
    }
    setImg(`/src/assets/${vehicleType}.png`);
  }, [data]);
  console.log(data);
  //<img src={img} alt="" />

  const checkBug = () => {
    const newCar = {
      model: carModel,
      LP: licensePlate,
      type: vehicleType,
      tm: time,
    };
    setData((prevState) => [...prevState, newCar]);
  };
  return (
    <div className="w-full h-full flex items-center mt-7 justify-center gap-10 flex-wrap">
      <section className="first-section h-[80vh] w-2/5">
        <div className="left-top h-2/4 flex flex-col bg-[#272b3b] items-center justify-center text-white">
          <div className=" h-2/4 flex justify-center">
            <img src={Logo} alt="" className="w-[150px]" />
          </div>

          <div className=" input w-[90%] h-[50%] flex flex-col justify-center">
            <label>Modelo:</label>
            <input
              className="font-[Inter, sans-serif] h-8 rounded-lg border-[1px] border-[#424554] text-white text-center bg-[#272b3b]"
              type="text"
              onChange={(e) => setCarModel(e.target.value)}
            />
            <label>Placa: </label>
            <input
              className=" font-[Inter, sans-serif]h-8 rounded-lg border-[1px] border-[#424554] text-white text-center bg-[#272b3b]"
              type="text"
              onChange={(e) => setLicensePlate(e.target.value)}
            />
          </div>
        </div>
        <div className="left-bottom h-1/2 bg-white">
          <div className="h-1/2 flex justify-around">
            <div className="w-[130px] cursor-pointer flex flex-col items-center">
              <img src={Car} alt="" onClick={() => setVehicleType("carro")} />
              <span>Carro</span>
            </div>
            <div className="w-[130px] cursor-pointer flex flex-col items-center">
              <img
                src={Moto}
                alt=""
                onClick={() => {
                  setVehicleType("Moto");
                }}
              />
              <span>Moto</span>
            </div>
            <div className="w-[130px] cursor-pointer flex flex-col items-center">
              <img
                src={Truck}
                alt=""
                onClick={() => {
                  setVehicleType("Caminhão");
                }}
              />
              <span>Caminhão</span>
            </div>
            <div className="w-[130px] cursor-pointer flex flex-col items-center">
              <img
                src={Bike}
                alt=""
                onClick={() => {
                  setVehicleType("Bicicleta");
                }}
              />
              <span>Bicicleta</span>
            </div>
          </div>
          <div className="h-1/3 flex items-center justify-around">
            <button
              className="w-[60px] h-[30px] cursor-pointer text-center border-[1px] border-[#424554] rounded-3xl"
              onClick={() => {
                setTime(60);
              }}
            >
              1h
            </button>
            <button
              className="w-[60px] h-[30px] cursor-pointer text-center border-[1px] border-[#424554] rounded-3xl"
              onClick={() => {
                setTime(180);
              }}
            >
              3h
            </button>
            <button
              className="w-[60px] h-[30px] cursor-pointer text-center border-[1px] border-[#424554] rounded-3xl"
              onClick={() => {
                setTime(720);
              }}
            >
              12h
            </button>
            <button
              className="w-[60px] h-[30px] cursor-pointer text-center border-[1px] border-[#424554] rounded-3xl"
              onClick={() => {
                setTime(1440);
              }}
            >
              24h
            </button>
          </div>
          <div className="h-1/5 flex items-center justify-center ">
            <button
              className="h-7 w-4/5  bg-[#3278fd] border-none text-white rounded-xl font-bold hover:bg-[#254f9c] hover:h-9 hover:ease-in duration-100 "
              onClick={checkBug}
            >
              CADASTRAR
            </button>
          </div>
        </div>
      </section>
      <section className="right-content bg-[#272b3b] text-white h-[80vh] w-2/5">
        <div className="flex justify-center items-center h-[10%]">
          <span>VAGAS</span>
        </div>
        <div className="flex h-[90%]">
          <div className="flex h-[90%] w-2/4 flex-col">
            {data.length < 5 &&
              data.map((c) => (
                <LeftParking
                  modelo={c.model}
                  placa={c.LP}
                  veiculo={c.type}
                  tempo={c.tm}
                />
              ))}
          </div>
          <div className="flex flex-col items-end h-[90%] w-1/2">
            {data.length > 5 &&
              data.map((c) => (
                <RightParking
                  modelo={c.model}
                  placa={c.LP}
                  veiculo={c.type}
                  tempo={c.tm}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
