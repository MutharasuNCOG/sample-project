import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Iframe Sample APP</h1>
      <div className="card">
      <iframe src="https://ecbd-14-102-2-70.ngrok-free.app/dform/226564653562306263303739323022/short" width="1200px" height="1200px"  style={{border:"none"}} allowFullScreen loading="lazy"></iframe>
      
      </div>
    </>
  )
}

export default App
