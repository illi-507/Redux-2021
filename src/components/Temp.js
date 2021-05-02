import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";
import "./Temp.css";

function Temp() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div className="temp-div">
      show temp cakes: {numOfIceCream}
      <button
        className="temp-button"
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        click to buy{" "}
      </button>
    </div>
  );
}

export default Temp;
