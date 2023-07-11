
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
 
  const[ct,updatedCt] = useState(0);

  const counter = () =>{
    updatedCt(ct + 1)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {ct} times</p>
        <button onClick={counter}>Click</button>
    </div>
  )
}

export default App
