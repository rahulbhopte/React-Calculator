import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");
  const clickhandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="calculator">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input
        type="button"
        value="0"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickhandler}
      />
      <input
        type="button"
        value="Clear"
        className="button1 button"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value="="
        className="button1 button"
        onClick={calculate}
      />
    </div>
  );
}
