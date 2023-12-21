import { useState } from "react"

function Counter() {

  let [Counter, setCounter] = useState(0)

  const addValue = () => {
    if(Counter==10){
      return 0
    }
    else{
      Counter = Counter + 1
      setCounter(Counter)
      console.log("ADD click", Counter)
    }
 }


  const removeValue = () => {
    if(Counter==0){
      return 0
    }
    else{
      Counter = Counter - 1
      setCounter(Counter)
      console.log("REMOVE click", Counter)
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

export default Counter
