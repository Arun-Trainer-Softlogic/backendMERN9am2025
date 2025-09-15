import { useState , useEffect } from 'react';

import './App.css'


function App() {
  const [message, setMessage] = useState("");

useEffect(()=> {
  //we call api data 
  fetch("http://localhost:3000/")
  .then ((res)=> res.json())
  .then ((data)=> setMessage(data.message));

},[]);


  return (
    <>
      <div> React + node.js example </div>
      <p>Message from Backend : {message}</p>
    </>
  )
}

export default App
