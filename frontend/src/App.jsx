import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import './Sample.css'
import './components/Header.css'
import FirstComp from'./components/FirstCompProp'
import SecondCom from'./components/SecondComProp'
import StateMgm from './StateMgm'
import ClickEvent from './ClickEvent'
function App() {
  const car = {
          model:"XUV300",
          year:2026,
          dealer:"Mahindra",
          color:"black"
  }
  return (
    <div className='conatainer'>
        <FirstComp n ={car.dealer}/>
        <SecondCom m = {car}/>
        <StateMgm/>
        <ClickEvent/>
    </div>
  )
}
export default App
