import React from 'react'
import Card from './Card';
import {colors,symbols} from '../Db/db';


const CardsDeck = ({cards}) => {
// console.log(colors[1].color);
// console.log(symbols);
    const cardDeck={
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       flexWrap:"wrap"
    }

    const randomSymbol= symbols[Math.floor(Math.random()*4)];
    console.log(randomSymbol);


    const randomCardColor=()=>{
        if(randomSymbol.name == 'spade'|| randomSymbol.name=="club" ){
           return colors[0].color;
        }
        else if(randomSymbol.name == 'heart' || randomSymbol.name == 'diamond' ){
           return colors[1].color;

        }
    }

    // console.log(randomCardColor);


  return (
    <div style={cardDeck} >
      {
        [...new Array(Number(cards))].map((num,i)=>{
            i++;
            return <Card key={i} name={randomSymbol.name} symbol={randomSymbol.symbol} color={randomCardColor()} number={i} />
        })
      }
    </div>
  )
}

export default CardsDeck