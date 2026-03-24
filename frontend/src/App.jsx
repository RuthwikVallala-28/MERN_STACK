import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import './Sample.css'
import './components/Header.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='conatainer'>
      <h1 className='head'>This is css styling</h1>
      <img src='favicon.svg'/>this is the image...
    </div>
  )
}

export default App
