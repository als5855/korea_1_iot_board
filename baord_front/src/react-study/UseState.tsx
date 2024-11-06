import React, { useState } from 'react'

export default function UseState(){
  const [count, setCount] = useState<number>(0);
  
  const handleCountClickBtn = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  return(
    <div>
      
      <h2>Count: {count}</h2>
      
      <button onClick={handleCountClickBtn}>카운트</button>
      
      </div>
  )
  
  }

