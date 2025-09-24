import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './content/ThemeContext'

function App() {

  const {theme , toggleTheme} = useContext(ThemeContext);



  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{
      backgroundColor : theme === "light" ? "#fff" : "#333",
      color : theme === "light" ? "#000" : "#fff",
      height : "100vh",
      display :"flex",
      flexDirection :"column",
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Click to see </button>
    </div>

    </>
  )
}

export default App
