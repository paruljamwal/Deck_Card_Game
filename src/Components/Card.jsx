import React, { useEffect, useState } from "react";


const Card = ({ number, color, symbol}) => {
    console.log(color,"color");
 
  
  //styling
  const [symb,setSymb]=useState(number);
  const [player,setPlayer]=useState([]);
  let [count,setCount]=useState(1);
  let [score,setScore]=useState(0);
  const [red,setRed]=useState(0);
  const [black,setBlack]=useState(0);
  const [numb,setNum]=useState();
  const [col,setColor]=useState();
  const [sym,setSym]=useState();

   let bag=[];





  const mainCardContainer = {
    width: "15rem",
    height: "25rem",
    borderRadius: "7px",
    margin: "10px",
    backgroundColor: "white",
    border:"1px solid gray",
    color: `${color}`,
    cursor:"pointer",
  
  };

  const cardTopSection = {
    display: "flex",
    width: "90%",
    height: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    border: "1px solid transparent",
    flexDirection: "column",
    margin: "3px auto",
  };

  const topSymbol = {
    fontSize: "25px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid transparent",
  };

  const topSymbolSingle = {
    width: "100%",
    fontSize: "30px",
    border: "1px solid transparent",
  };

  const cardMidSection = {
    // width: "100%",
    display: "flex",
    // border: "1px solid red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1px auto",
    height:"180px" ,
    cursor:"pointer",
    position:"relative",
    // display: "grid",
    // gridTemplateColumns:"repeat(2,1fr)",
    // alignItems:"center",
    // width:"90%",
    // padding:"1px",

  };

  const centerSymbol = {
    fontSize: "75px",
  };

  const cardBottomSection = {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    border: "1px solid transparent",
    margin: "50px auto",
    fontSize: "25px",
  };

  const bottomSymbol = {
    fontSize: "30px",
  };

  const grid2={
    width:"100%",
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexWrap:"wrap",
    gap:"0px"
    // height:"120px"
    // border: "1px solid green",
}



const grid4={
    position:"relative",
    display: "grid",
    gridTemplateColumns:"repeat(2,1fr)",
    alignItems:"center",
    width:"90%",
    padding:"1px",
    gap:"5px",
    border: "1px solid transparent",
}

const grid5={
  position:"absolute",
  display: "grid",
  gridTemplateColumns:"repeat(3,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"10px",
  border: "1px solid transparent",
}


const grid6={
  position:"relative",
  top:"30px",
  display: "grid",
  gridTemplateColumns:"repeat(2,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"11px",
  transform:"translate(0,-1rem)",
  border: "1px solid transparent",
}


const grid7={
  position:"relative",
  display: "grid",
  top:"35px",
  gridTemplateColumns:"repeat(3,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"2px",
  transform:"translate(0,-1rem)",
  border: "1px solid transparent",
}

const grid8={
  position:"relative",
  top:"20px",
  display: "grid",
  gridTemplateColumns:"repeat(3,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"0px 20px",
  border: "1px solid transparent",
}


const grid9={
  border:"1px solid red",
  // position:"absolute",
  display: "grid",
  gridTemplateColumns:"repeat(3,1fr)",
  alignItems:"center",
  justifyContent:"center",
  width:"90%",
  border: "1px solid transparent",
  // height: "170px",
  marginTop:"6px"

}


const grid10={
  position:"absolute",
  display: "grid",
  top:"5px",
  gridTemplateColumns:"repeat(4,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"5px",
  transform:"translate(5,137rem)",
  border: "1px solid transparent",
}


const grid13={
  position:"absolute",
  top:"-40px",
  display: "grid",
  gridTemplateColumns:"repeat(4,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"0px",
  border: "1px solid transparent",
}

 
const grid11={
  position:"absolute",
  display: "grid",
  top:"10px",
  gridTemplateColumns:"repeat(4,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"5px",
  border: "1px solid transparent",
}

const grid12={
  position:"absolute",
  display: "grid",
  top:"-15px",
  gridTemplateColumns:"repeat(4,1fr)",
  alignItems:"center",
  width:"90%",
  padding:"1px",
  gap:"1px",
  transform:"translate(5,137rem)",
  border: "1px solid transparent",
}

const handelCard=(num,color,symbol)=>{
  setCount(pre=>pre+1)
  window.location.reload()
  setNum(num)
  setColor(color);
  setSym(symbol)
  bag.push(numb,col,sym);
  console.log(bag);
  let player= localStorage.setItem("set1",JSON.stringify(bag))

  
}







// console.log(symb,"s");
console.log(number,symb);

useEffect(()=>{

  if(color== "black"){
    setBlack(pre=>pre+1)
  }
  else{
    setRed(pre=>pre+1);
    
  }
  
  
},[setNum])
console.log(red,black,"clr")
console.log(count,"vou");
localStorage.setItem("black",black);
localStorage.setItem("red",red);


if((color=='red' || color!='black') && (color=='black' || color !="red") ){
  setScore(pre=>pre+4)
}


  return (
    <>

    {
      count=="5" ? <h1>{score}</h1> : <h1>{}</h1>
    }
     
    <div style={mainCardContainer}  onClick={()=>handelCard(number, color, symbol)} >
      
      {/* TopSection */}
      <div style={cardTopSection}>
        <div style={topSymbol}>
          <p>{number}</p>
          <span style={topSymbolSingle}>{symbol}</span>
        </div>
      </div>

      {/* MidSection */}
      <div style={cardMidSection}>
        <div style={
          symb== "13" ? grid13 :    
          symb =='4' ? grid4 : 
          symb== "12" ? grid12 :
          symb== '10' ? grid10 : 
          symb== "9" ? grid9 :  
          symb== '8' ? grid8 :
          symb== '5' ? grid5 :
          symb== '7' ? grid7 : 
          symb== "6" ? grid6 :  
                    symb== "11" ? grid11 :  
                    grid6     
      } >
        {[...Array(Number(number))].map((sym, i) => {
          i+=1;
          return (
            <span key={i}>
              <span style={centerSymbol}>{symbol}</span>
            </span>
          );
        })}

        </div>
      </div>

      {/* BottomSection */}
      <div style={cardBottomSection}>
        <span style={bottomSymbol}>{symbol}</span>
        <p>{number}</p>
      </div>
  
    </div>


<div>
 </div>
   
    </>
  );
};

export default Card;
