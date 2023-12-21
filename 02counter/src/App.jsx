import { useState } from "react"

function App() {

  let [Counter, setCounter] = useState(0)

  const addValue = () => {
    if(Counter==20){
      return 0
    }
    else{
      Counter = Counter + 1
      setCounter(Counter)
      console.log("click", Counter)
    }
 }


  const removeValue = () => {
    if(Counter==0){
      return 0
    }
    else{
      Counter = Counter - 1
      setCounter(Counter)
      console.log("click", Counter)
    }
 }


  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value:{Counter}</h2>

      <button onClick={addValue}>Add Value:{Counter}</button><br />
      <button onClick={removeValue}>remove Value:{Counter}</button>
    </>
  )
}

export default App
