import "./App.css";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <img
          src="https://why.pay.link/templates/rt_fluent/custom/images/home/PayOps%20Spaceship%20Isolated.png"
          alt="spaceship"
        />
        <p>Ready To Go</p>
      </header>
      <div className="my-launcher">
        <div className="buttons">
          <div className="buttons-list-01">
            <div>
              <button
                className={switch1 === true && "active"}
                onClick={() => {
                  setSwitch1(true);
                }}
              >
                <p>ON</p>
              </button>
            </div>
            <div>
              <button
                className={switch1 === false && "unactive"}
                onClick={() => {
                  setSwitch1(false);
                }}
              >
                <p>OFF</p>
              </button>
            </div>
          </div>
          <div className="buttons-list-02">
            <div>
              <button
                className={switch2 === true && "active"}
                onClick={() => {
                  setSwitch2(true);
                }}
              >
                <p>ON</p>
              </button>
            </div>
            <div>
              <button
                className={switch2 === false && "unactive"}
                onClick={() => {
                  setSwitch2(false);
                }}
              >
                <p>OFF</p>
              </button>
            </div>
          </div>
          <div className="buttons-list-03">
            <div>
              <button
                className={switch3 === true && "active"}
                onClick={() => {
                  setSwitch3(true);
                }}
              >
                <p>ON</p>
              </button>
            </div>
            <div>
              <button
                className={switch3 === false && "unactive"}
                onClick={() => {
                  setSwitch3(false);
                }}
              >
                <p>OFF</p>
              </button>
            </div>
          </div>
        </div>
        <div className="result">
          <div
            className={
              switch1 === true &&
              switch2 &&
              true &&
              switch3 === true &&
              "final-active"
            }
          >
            <div>
              {switch1 === true && switch2 && true && switch3 === true ? (
                <h1>BLAST !</h1>
              ) : (
                <h2>PENDING...</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Made by Dean at Le Reacteur - Novembre 2022</p>
      </footer>
    </>
  );
}

export default App;
