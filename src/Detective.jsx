import React, { useState } from 'react';


function Detective() {
    const [sherlock, setSherlock] = useState("психопат");
    
    const handleClick = () => {
        setSherlock("высокоактивный социопат");
      };
  return (
    <div>
      Шерлок - {sherlock}
     <div onClick={handleClick}><button>Узнать правду</button></div>
    </div>
  );
  }
  
  export default Detective;
  