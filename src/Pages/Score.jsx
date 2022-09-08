import React, { useEffect, useState } from 'react'

const Score = ({scoreArray}) => {
  
    const [finalScore,setFinal]=useState(0)


    useEffect(()=>{
        const count=scoreArray.reduce((acc,crr)=>acc+crr,0);
        setFinal(count);

    },[setFinal,scoreArray]);



  return (
    <div>
        <h1 style={{fontSize: 22}}Pts >Score:{setFinal}</h1>
    </div>
  )
}

export default Score