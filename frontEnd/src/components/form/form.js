import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./form.css";

function FormGift({ addGift }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addGift(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <h5 className="addGiftHeading">Add Gift 🎁</h5>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="New gift idea"
        />
      </Form.Group>
      <Button className="submit" variant="success mb-3" type="submit" block>
        Submit
      </Button>
    </Form>
  );
}

export default FormGift;
