import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordref=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyzZ"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*+"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copypasswordtoclipboard= useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md shadow-lg mx-auto px-3 rounded-lg pb-3 mt-10 text-orange-500 bg-gray-700 ">

        <h1 className="text-xl my-3 text-white font-semibold pt-10 text-center">Password Generator</h1>
        <div className="flex shadow-lg overflow-hidden mb-4 rounded-lg">
          <input type="text" value={password} placeholder="password" className="outline-none w-full py-1 px-3" readOnly ref={passwordref} />
          <button onClick={copypasswordtoclipboard} className="outline-none text-white bg-blue-700 px-3 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-8">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} />
            <label className="text-white font-semibold mb-1">Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label className="text-white font-semibold ">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label className="text-white font-semibold ">Character</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
