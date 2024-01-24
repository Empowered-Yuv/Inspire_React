import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  
  //let counter = 5

  const addValue = () => {
    //console.log("Value Added", Math.random());
    //counter++;
    //console.log("Clicked", counter);
    //Problem in ui updation | react will decide
    //react provides some methods called hooks
    if (counter === 10) {
      alert("Maximum Value reached")
    }
    else{
      setCounter(counter + 1)
    }

   
  }

  const subValue = () => {
    if (counter === 0) {
      alert("Minimum Value reached")      
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Ritika And Yuv</h1>
      <h2>Love on a scale : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button
      onClick={subValue}
      >Sub value</button>
    </>
  )
}

export default App
