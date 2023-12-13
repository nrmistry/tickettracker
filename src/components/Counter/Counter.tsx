import "./Counter.scss";
import {useState} from "react";

const Counter = () => {
const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
      setCounter(counter + 1);
    }

  const handleDecrement = () => {
    if (counter >0){
        setCounter(counter-1)
    }
    }

    return (
      <div className="containerContent">
        <h1 className="containerContent__heading">Counter</h1>
        <div className="containerContent__counter">
          <button
            className="containerContent__counter__button containerContent__counter__button--left"
            aria-label="Navigate decrease"
            onClick={handleDecrement}
          >
            <p className="containerContent__counter__button--text">-</p>
          </button>
          <h3 className="containerContent__counter__number">{counter}</h3>
          <button
            className="containerContent__counter__button containerContent__counter__button--add"
            aria-label="Navigate increase"
            onClick={handleIncrement}
          >
            <p className="containerContent__counter__button--text">+</p>
          </button>
        </div>
      </div>
    );
  }

    
    export default Counter;