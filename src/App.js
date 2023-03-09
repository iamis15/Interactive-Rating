import React from "react";
import Star from "./images/icon-star.svg";
import Thanks from "./images/illustration-thank-you.svg"

export default function App() {
  const [submitted, setSubmitted] = React.useState(false);
  const [option, setOption] = React.useState(0)
  const hover = { backgroundColor: "#fb7413", color: "white" };

  return !submitted ? (
    <div className="rating">
      <div className="star">
        <img src={Star} />
      </div>
      <h1>How did we do?</h1>
      <p className="desc">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="options">
        <p style={option === 1 ? hover : null} onClick={() => setOption(1)} className="option">1</p>
        <p style={option === 2 ? hover : null} onClick={() => setOption(2)} className="option">2</p>
        <p style={option === 3 ? hover : null} onClick={() => setOption(3)} className="option">3</p>
        <p style={option === 4 ? hover : null} onClick={() => setOption(4)} className="option">4</p>
        <p style={option === 5 ? hover : null} onClick={() => setOption(5)} className="option">5</p>
      </div>
      <button onClick={() => setSubmitted(true)}>Submit</button>
    </div>
  ) : (
    <div className="submitted">
      <img src={Thanks} />
      <p className="result">You selected {option} out of 5</p>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  );
}
