import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import MegaMenu from './Component/MegaMenu/MegaMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <MegaMenu></MegaMenu>
      {/* <Header></Header> */}
    </>
  )
}

export default App
