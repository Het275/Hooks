import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parents from './components/Parents'
import Counter from './components/Counter'

function App() {

  const [name, setName] = useState('');
  
  const refElement = useRef();
  console.log(refElement)

  const handleRemove = () => {
    setName('')
    refElement.current.focus()
  }

  const changeColor = () => {
    refElement.current.style.color = "blue"
  }

  return (
    <>
      <h1>useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleRemove}>Clear</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default App
