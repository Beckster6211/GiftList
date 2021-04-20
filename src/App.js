import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gift from "./components/gift/gift";
import FormGift from "./components/form/form";

function App() {
  const [gifts, setGifts] = useState([
    {
      text: "Flying Saucers",
      isDone: false,
    },
  ]);

  const addGift = (text) => {
    const newGifts = [...gifts, { text }];
    setGifts(newGifts);
  };

  const markGift = (index) => {
    const newGifts = [...gifts];
    newGifts[index].isDone = true;
    setGifts(newGifts);
  };

  const removeGift = (index) => {
    const newGifts = [...gifts];
    newGifts.splice(index, 1);
    setGifts(newGifts);
  };

  return (
    <div className="App">
      <h1 className="heading">🎂 Becky would like... 🎄</h1>
      <p className="please">Please</p>
      <div className="container">
        <FormGift addGift={addGift} />
        <div className="giftList">
          {gifts.map((gift, index) => (
            <Card>
              <Card.Body className="cardBody">
                <Gift
                  key={index}
                  index={index}
                  gift={gift}
                  markGift={markGift}
                  removeGift={removeGift}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
