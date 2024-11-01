import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "http://localhost:8080";

function App() {
  const [newEntry, setNewEntries] = useState([]);
  const [entry, setEntry] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${BASE_URL}/entries`)
      .then((res) => res.json())
      .then((entry) => {
        setNewEntries(entry);
        setNewEntries("");
      });
  }

  async function getEntry() {
    const response = await fetch(`${BASE_URL}/entries`);
    const entry = await response.json();
    setEntry(entry);
  }

  useEffect(() => {
    getEntry();
  }, []);

  // setInterval()

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Write something.."
        ></input>
        <button>Post</button>
      </form>
      <div className="post_stack">
        {entry &&
          entry.map((entry, index) => (
            <div key={index}>
              <p>{entry.author}</p>
              <p>{entry.text}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
