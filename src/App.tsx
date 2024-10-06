import { useState } from "react"

function App() {
  const [count,setCount] = useState<number>(0)
  return (
    <div>
      {count}
      <button onClick={()=>setCount(c=>c+1)}>Inc</button>
      <button onClick={()=>setCount(c=>c-1)}>Dec</button>
    </div>
  )
}

export default App
