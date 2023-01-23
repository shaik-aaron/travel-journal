import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {

    const travelCards = data.map(item => {
      return (
        <Card
        key={item.id}
        item={item} />
      )
    })

  return (
    <div id="main">
      <Header />
        <div className="travel--cards">
          {travelCards}
        </div>
    </div>
  );
}

export default App;
