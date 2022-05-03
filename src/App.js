import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const peopleList = people.length;

  return (
    <div className="root">
      <div className="contentWrapper">
        <h3 className="textHeader">
          <span className="birthdayNum">{peopleList}</span> Birthdays Listed
        </h3>
        <List people={people} setPeople={setPeople} />
        <button className="clearBtn" onClick={() => setPeople([])}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default App;
