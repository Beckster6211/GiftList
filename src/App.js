import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gift from "./components/gift";
import FormGift from "./components/form";

function App() {
  const [gifts, setGifts] = useState([
    {
      text: "This is a sample",
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
      <div className="container">
        <h1 className="text-center mb-4">Gift List</h1>
        <FormGift addGift={addGift} />
        <div>
          {gifts.map((gift, index) => (
            <Card>
              <Card.Body>
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
