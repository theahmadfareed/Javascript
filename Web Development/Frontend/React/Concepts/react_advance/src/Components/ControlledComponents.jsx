import { useState } from "react";

function ControlledComp() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Explain why the experience was poor!");
      return;
    }
    console.log("Form Submitted.");
    setName("");
    setScore("10");
    setComment("");
  };
  return (
    <div className="bg-light-pink">
      <h1>Controlled Form Components</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h5>Feedback Form</h5>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Score:{score}</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlledComp;
