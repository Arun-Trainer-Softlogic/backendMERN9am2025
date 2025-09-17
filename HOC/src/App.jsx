import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import withLogging from './withLogging';
import SimpleButton from './SimpleButton';



function App() {

  const LoggedButton = withLogging(SimpleButton)

 
  const [count, setCount] = useState(0)


  return (
    <>
      <div >
        <h1>Hoc Examples </h1>
        <LoggedButton
          label={`clicked ${count} times `}
          onClick={() => setCount(count + 1)}

        />
        <SimpleButton/>
      </div>
    </>
  )
}

export default App
