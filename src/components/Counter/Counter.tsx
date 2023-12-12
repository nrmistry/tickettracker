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
        <div className="counter">
          <button
            className="counter__button counter__button--left"
            aria-label="Navigate decrease"
            onClick={handleDecrement}
          >
            <p className="counter__button--text">-</p>
          </button>
          <h3 className="counter__number"> {counter} </h3>
          <button
            className="counter__button counter__button--add"
            aria-label="Navigate increase"
            onClick={handleIncrement}
          >
            <p className="counter__button--text">+</p>
          </button>
        </div>
      );
    };

    
    export default Counter;