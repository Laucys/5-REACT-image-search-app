import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [value, setValue] = useState("");
  const [clientId, setClientId] = useState("YHnEq5yrH2knx3K4p_8LiLj7JpZqDony93vCw73zRd8");
  const [results, setResults] = useState([]);

  const handleInput = (e) => {
    let input = e.target.value;
    setValue(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://api.unsplash.com/search/photos/?page=1&per_page=9&query="+value+"&client_id="+clientId;

    axios.get(url)
    .then((response) => {
      console.log(response);
      setResults(response.data.results);
    });

    setValue("");

  }

  return (
    <div className="App">
      <h1>Image Search App</h1>
      <form onSubmit={handleSubmit}>
            <input
            className="input"
            type="text"
            className="input"
            placeholder="Enter image title"
            value={value}
            onChange={handleInput}
            />
        </form>
        <div className="images">
        {results.map((result, index) => (
          <img className="image" src={result.urls.regular} alt="search result" key={index}/>
        ))}
        </div>
    </div>
  );
}

export default App;
