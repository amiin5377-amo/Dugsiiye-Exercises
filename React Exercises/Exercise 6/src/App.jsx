import { useState, useEffect } from 'react'

function App() {
const [name, setName] = useState('')
const [greeting, setGreeting] = useState('welcome')
 useEffect(() => {
  
       !name ?     document.title = 'welcome' : document.title = `${greeting}, ${name}`
    }, [name, greeting])
   return (
    <div >
      enter your name:
  <input value={name} onChange={e => setName(e.target.value)} />
  Greeting:
  <input value={greeting} onChange={e => setGreeting(e.target.value)} />
    </div>
  )
}
 export default App    
     
 


