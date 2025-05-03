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
      <iframe src="http://localhost:5173/dform/226534353666363732343833393122/short" width="1200px" height="1200px" style="border: none;" allowfullscreen loading="lazy"></iframe>
      </div>
    </>
  )
}

export default App
