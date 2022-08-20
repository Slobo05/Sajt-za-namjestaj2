import React, { useState } from "react";
import "./App.css";

function App() {
  const [vidi, setVidi] = useState(false);
  const [tvVidi, setTvVidi] = useState(false);
  const [stoVidi, setStoVidi] = useState(false);

  return (
    <div className="App">
      <div className="stolica" onClick={() => {setVidi(!vidi)}}>
        <div className="krug">
          <div className={vidi ? 'crta1' : 'crta1ROT'}></div>
          <div className={vidi ? 'crta2' : 'crta2ROT'}></div>
        </div>
        {vidi && (
          <div className="tekst">
            <h2>Dvosjed</h2>
            <h3>Cijena: 374.50 KM</h3>
          </div>
        )}
      </div>
      <div className="tv" onClick={() => {setTvVidi(!tvVidi)}}>
        <div className="krug2">
          <div className={tvVidi ? 'crta3' : 'crta3ROT'}></div>
          <div className={tvVidi ? 'crta4' : 'crta4ROT'}></div>
        </div>
        {tvVidi && (
          <div className="tekst2">
            <h2>TV</h2>
            <h3>Cijena: 1000.00 KM</h3>
          </div>
        )}
      </div>
      <div className="sto" onClick={() => {setStoVidi(!stoVidi)}}>
        <div className="krug3">
          <div className={stoVidi ? 'crta5' : 'crta5ROT'}></div>
          <div className={stoVidi ? 'crta6' : 'crta6ROT'}></div>
        </div>
        {stoVidi && (
          <div className="tekst3">
            <h2>Sto</h2>
            <h3>Cijena: 211.00 KM</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
