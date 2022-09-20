import { useState } from "react";
import "./App.css";
import Logo from "./assets/logoimg.svg";
import Car from "./assets/carro.png";
import Moto from "./assets/moto.png";
import Truck from "./assets/caminhao.png";
import Bike from "./assets/bicicleta.png";

function App() {
  return (
    <div className="main">
      <section className="left-content">
        <div className="left-top">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="input">
            <label>Modelo:</label>
            <input type="text" />
            <label>Placa: </label>
            <input type="text" />
          </div>
        </div>
        <div className="left-bottom">
          <div className="vehicle">
            <div className="vehicle-type">
              <img src={Car} alt="" />
              <span>Carro</span>
            </div>
            <div className="vehicle-type">
              <img src={Moto} alt="" />
              <span>Moto</span>
            </div>
            <div className="vehicle-type">
              <img src={Truck} alt="" />
              <span>Caminhão</span>
            </div>
            <div className="vehicle-type">
              <img src={Bike} alt="" />
              <span>Bicicleta</span>
            </div>
          </div>
          <div className="period">
            <button className="time">1h</button>
            <button className="time">3h</button>
            <button className="time">12h</button>
            <button className="time">24h</button>
          </div>
          <div className="left-bottom-footer">
            <button>CADASTRAR</button>
          </div>
        </div>
      </section>
      <section className="right-content">
        <div className="tittle">
          <span>VAGAS</span>
        </div>
        <div className="parking-area">
          <div className="left-parking">
            <div className="parking-space-left">
              <button>X</button>
            </div>

            <div className="parking-space-left">
              <button>X</button>
            </div>
            <div className="parking-space-left">
              <button>X</button>
            </div>
            <div className="parking-space-left">
              <button>X</button>
            </div>
          </div>
          <div className="right-parking">
            <div className="parking-space-right">
              <button>X</button>
            </div>
            <div className="parking-space-right">
              <button>X</button>
            </div>
            <div className="parking-space-right">
              <button>X</button>
            </div>
            <div className="parking-space-right">
              <button>X</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
