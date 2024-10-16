import React, { useState, useEffect } from "react";
import Head from 'next/head';
import ZoniGame from "../components/ZoniGame";

export default function App() {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    // Loads when the game starts
  }, [])

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height"></meta>
      </Head>

      <div className="row">
          <div className="logo-div">
            <img className="logo" src="cards/back.png"></img>
          </div>
      </div>
      <div className="row">
          <div className="col-4"></div>
          <div className="col-3">High Score: {highScore}</div>
          <div className="col-5">
          {options === null ? (
            <>
              <button onClick={() => setOptions(true)}>Start Game</button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  const prevOptions = options
                  setOptions(null)
                  setTimeout(() => {
                    setOptions(prevOptions)
                  }, 5)
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Main Menu</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <ZoniGame
          options={options}
          setOptions={setOptions}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      ) : (
        <div>
        <h2>Choose an arrangement to begin!</h2>
                <img src="cards/instructions.png"></img>
          </div>
      )}
          <style jsx global>
  {`
    body {
      text-align: center;
      font-family: -apple-system, sans-serif;
    }
    button {
      background: #00ad9f;
      border-radius: 4px;
      font-weight: 700;
      color: #fff;
      border: none;
      padding: 7px 15px;
      margin-left: 8px;
      cursor: pointer;
    }
    button:hover {
      background: #008378;
    }
    button:focus {
      outline: 0;
    }
    #cards {
      width: ${130*2}px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
    .card {
      width: 120px;
      height: 80px;
      margin-bottom: 10px;
      margin-right: 10px;
    }
    .c {
      position: absolute;
      max-width: 120px;
      max-height: 80px;
      width: 30ch;
      height: 30ch;
      cursor: pointer;
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      will-change: transform, opacity;
    }
    .logo-div {
      width: 100%;
      height: 100%;
    }
    @media only screen and (min-width: 300px) {
      #cards {
        width: ${130*3-10}px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
      .card {
        width: 120px;
        height: 80px;
        margin-bottom: 10px;
        margin-right: 0px;
      }
      .card:not(:nth-child(3n)) {
        width: 120px;
        height: 80px;
        margin-bottom: 10px;
        margin-right: 10px;
      }
      .c {
        position: absolute;
        max-width: 120px;
        max-height: 80px;
        width: 30ch;
        height: 30ch;
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        will-change: transform, opacity;
      }
      .logo-div {
        width: 100%;
        height: 100%;
      }
    }

    @media only screen and (min-width: 400px) {
      #cards {
        width: ${130*4}px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
      .card {
        width: 120px;
        height: 90px;
        margin-bottom: 10px;
        margin-right: 0px;
      }
      .card:not(:nth-child(4n)) {
        width: 120px;
        height: 90px;
        margin-bottom: 10px;
        margin-right: 10px;
      }

      .c {
        position: absolute;
        max-width: 120px;
        max-height: 90px;
        width: 30ch;
        height: 30ch;
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        will-change: transform, opacity;
      }
      .logo-div {
        width: 75%;
        height: 100%;
      }
    }

    @media only screen and (min-width: 560px) {
      #cards {
        width: ${140*5}px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
      .card {
        width: 130px;
        height: 100px;
        margin-bottom: 10px;
        margin-right: 0px;
      }
      .card:not(:nth-child(5n)) {
        width: 130px;
        height: 100px;
        margin-bottom: 10px;
        margin-right: 10px;
      }
      .c {
        position: absolute;
        max-width: 130px;
        max-height: 100px;
        width: 30ch;
        height: 30ch;
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        will-change: transform, opacity;
      }
      .logo-div {
        width: 50%;
        height: 50%;
      }
    }

    @media only screen and (min-width: 640px) {
      #cards {
        width: ${160*6-10}px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
      .card {
        width: 150px;
        height: 100px;
        margin-bottom: 10px;
        margin-right: 0px;
      }
      .card:not(:nth-child(6n)) {
        width: 150px;
        height: 100px;
        margin-bottom: 10px;
        margin-right: 10px;
      }
      .c {
        position: absolute;
        max-width: 150px;
        max-height: 100px;
        width: 40ch;
        height: 40ch;
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        will-change: transform, opacity;
      }
      .logo-div {
        width: 33%;
        height: 20px;
      }
    }

    @media only screen and (min-width: 768px) {
      #cards {
        width: ${175+195*(8-1)}px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
      }
      .card {
        width: 175px;
        height: 125px;
        margin-bottom: 20px;
        margin-right: 0px;
      }
      .card:not(:nth-child(8n)) {
        width: 175px;
        height: 125px;
        margin-bottom: 20px;
        margin-right: 20px;
      }
      .c {
        position: absolute;
        max-width: 175px;
        max-height: 125px;
        width: 50ch;
        height: 50ch;
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        will-change: transform, opacity;
      }
      .logo-div {
        width: 25%;
        height: 20px;
      }
    }

    .front,
    .back {
      background-size: cover;
    }

    .back {
      background-image: url(cards/back.png);
    }

    .front {
      background-image: url(cards/ZONI-.png);
      background-color: white;
    }

    .logo {
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      will-change: transform, opacity;
    }
    .rules {
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      will-change: transform, opacity;
    }
    * {
      box-sizing: border-box;
    }

    .row::after {
      content: "";
      clear: both;
      display: table;
    }

    [class*="col-"] {
      float: left;
      padding: 15px;
      width: 100%;
    }

    @media only screen and (min-width: 560px) {
      /* For desktop: */
      .col-1 {width: 8.33%;}
      .col-2 {width: 16.66%;}
      .col-3 {width: 25%;}
      .col-4 {width: 33.33%;}
      .col-5 {width: 41.66%;}
      .col-6 {width: 50%;}
      .col-7 {width: 58.33%;}
      .col-8 {width: 66.66%;}
      .col-9 {width: 75%;}
      .col-10 {width: 83.33%;}
      .col-11 {width: 91.66%;}
      .col-12 {width: 100%;}
      .logo {
        border-radius: 12px;
        transform: rotateZ(-20deg);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        will-change: transform, opacity;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `}
      </style>
          </div>
  )
}
