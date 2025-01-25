import './App.css'
import Logo from './assets/logo.svg'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div id="container">
        <div id="header">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <Outlet />
      </div>
    </>
  )
}

export default App
