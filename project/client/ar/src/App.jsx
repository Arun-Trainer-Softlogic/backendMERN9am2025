
import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [response, setResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await res.text();
      setResponse(data);
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  };

  return (
    <>
      <div>
        <h1>Form + express </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>

        {response && <p style={{ marginTop: "1rem" }}>{response}</p>}

      </div>
    </>
  )
}

export default App
