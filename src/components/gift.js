import { Button } from "react-bootstrap";
import "../App.css";

function Gift({ gift, index, markGift, removeGift }) {
  return (
    <div className="gift">
      <span style={{ textDecoration: gift.isDone ? "line-through" : "" }}>
        {gift.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markGift(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeGift(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

export default Gift;
