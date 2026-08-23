import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>Decrement</button>  
    </>
  )
}

export default App
