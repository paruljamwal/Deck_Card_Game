
import { useEffect, useState } from 'react';
import './App.css';
import CardsDeck from './Components/CardsDeck';
import {numbers,colors,symbols} from './Db/db'

function App() {
  let [score,setScore]=useState(0);
  console.log(score,"as");
  console.log(numbers,colors,symbols);
  let card=52;
  let RandomDeck;
  for(let i=0;i<5;i++){
    if(i<5){
       RandomDeck=Math.floor(Math.random()*(12-10)+10);
    }
  }
  let Btn={
    width:"150px",
    height:"50px",
    margin:"5px auto",
  }
  
  let set1=localStorage.getItem("set1")
  console.log(set1)

 
 // console.log(RandomDeck);
  return (
    <>
    {}
    <div className="App">
      <button style={Btn} onClick={() => window.location.reload()}>Start</button> <button  style={Btn}  onClick={() => window.location.reload()}>Quit</button>
       <CardsDeck cards={RandomDeck} />
    </div>
    </>
  );
}

export default App;
