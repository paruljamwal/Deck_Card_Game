import React, { useEffect, useState } from "react";
import Card from "./Card";
import { colors, symbols, numbers } from "../Db/db";
import useRandomValueFromArray from "../CustomeHooks/RandomValue";
import Score from "../Pages/Score";

const CardsDeck = ({ cards }) => {

  let [player,setPlayer]=useState([]);
  const [scoreArray]=useState([])
  // console.log(colors[1].color);
  // console.log(symbols);
  // console.log(cards,"cards");
  console.log(numbers,"numbers");

  const { randomValueFromArray } = useRandomValueFromArray();

     console.log( randomValueFromArray(numbers).number);

  const cardDeck = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
 
  };


  useEffect(()=>{
   console.log(scoreArray);
  },[scoreArray])

  // console.log(player,"ply")


  return (
    <>
    <Score scoreArray={scoreArray} />
    <div style={cardDeck}>
      { [...Array(Number(cards))].map((num, i) => {
        i += 1;
        const randomSymbol =
          symbols[Math.floor(Math.random() * symbols.length)];
    
        return (
          <Card
            key={i}
            name={randomSymbol.name}
            symbol={randomSymbol.symbol}
            color={
              randomSymbol.name == "spade" || randomSymbol == "club"
                ? `${colors[0].color}`
                : `${colors[1].color}`
            }
            number={randomValueFromArray(numbers).number}
            scoreArray={scoreArray}
          />
        );
      })}
    </div>
    </>
  );
};

export default CardsDeck;
