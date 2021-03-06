import { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const cities = ["harrow", "heathrow", "stratford"];
  const categories = ["pharmacies", "colleges", "doctors", "hospitals"];
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (city && category) {
      fetch(`https://node-city-guide.cbaggini.repl.co/${city}/${category}`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin":
            "https://node-city-guide.cbaggini.repl.co",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setInfo(data));
    }
  }, [city, category]);

  const changeSelection = (e) => {
    setCategory(e.target.value);
    e.target.parentElement.childNodes.forEach(
      (el) => (el.className = "btn btn-secondary")
    );
    e.target.className = "btn btn-primary";
  };

  const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

  return (
    <div className="App">
      <h1>City Mini Guide</h1>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((el) => (
          <option key={el} value={el}>
            {capitalize(el)}
          </option>
        ))}
      </select>
      {category && !city && (
        <h3 className="alert alert-danger">Please select a city as well!</h3>
      )}
      <div>
        {categories.map((el) => (
          <button
            key={el}
            value={el}
            className="btn btn-secondary"
            onClick={changeSelection}
          >
            {capitalize(el)}
          </button>
        ))}
      </div>

      {info[0] && <Table data={info} />}
    </div>
  );
}

export default App;
