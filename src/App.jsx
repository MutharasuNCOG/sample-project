import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Iframe Sample APP</h1>
      <div className="card">
      <iframe src="https://5cbc-14-102-2-70.ngrok-free.app/dform/223738666539643836383538303822/short" width="1000px" height="1000px" style={{border:"none"}} allowFullScreen loading="lazy"></iframe>      </div>
    </>
  )
}

export default App
