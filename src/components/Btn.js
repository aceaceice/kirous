import React, { useState } from "react";

const Btn = () => {
  const [net, setNet] = useState(false);
  return (
    <div>
      <div className="body">
        <div
          className="mainnet btn"
          onClick={() => {
            setNet(true);
          }}
        >
          Mainnet
        </div>
        <div
          className="testnet btn"
          onClick={() => {
            setNet(true);
          }}
        >
          Testnet
        </div>
        <div className="TBD">{net ? "TBD" : ""}</div>
      </div>
    </div>
  );
};

export default Btn;
