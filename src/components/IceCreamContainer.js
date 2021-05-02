import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream, popIceCream} from "../redux";

function HooksIceCreamContainer() {
  const iceCreamArray = useSelector((state) => state.iceCream.iceCreamArray);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        (Using hook)Number of ice creams:
        <ul>
          {iceCreamArray.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </h2>
      <button onClick={() => dispatch(popIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
