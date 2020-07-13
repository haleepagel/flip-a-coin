import React, { useState } from "react";
import "../styles/CoinFlip.css";

export default function CoinFlip() {
  const [coinTossResult, setCoinTossResult] = useState("");

  function flipTheCoin() {
    return fetch("https://coin-flip1.p.rapidapi.com/headstails", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coin-flip1.p.rapidapi.com",
        "x-rapidapi-key": "30459c36dbmsh71b93ec94700406p118aa2jsnc8e086844fc1",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((coinFlipObj) => {
        return coinFlipObj;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="CoinFlip">
      <div className="coinFlipAPI">
        <form>
          <button
            type="submit"
            className="button"
            onClick={async (e) => {
              e.preventDefault();
              setCoinTossResult("");
              // send fetch request to API
              let flipTheCoinObj = await flipTheCoin();
              if (flipTheCoinObj) {
                setCoinTossResult(flipTheCoinObj.outcome);
              } else if (!flipTheCoinObj) {
                console.log("api fetch fail");
              }
            }}
          >
            Heads or Tails?
          </button>
        </form>
      </div>
      <div className="coinFlipResult">{coinTossResult}</div>
    </div>
  );
}
