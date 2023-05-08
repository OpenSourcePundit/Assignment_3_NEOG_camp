// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
import { useState } from "react";

export const Card = () => {
  var [Radius, setRadius] = useState(0);
  const SetBorderRadius = () => {
    setRadius(event.target.value);
  };

  return (
    <div
      className="Card Main"
      style={{
        border: "solid 2px blue",
        padding: "2px 2px 20px 2px",
        borderRadius: `${Radius}px`
      }}
    >
      <h2 className="heading">Card With Rounded Corners</h2>
      <label htmlFor="Border_Radius">Border Radius:</label>
      <input
        type="range"
        name="Border Radius"
        id="Border_Radius"
        onChange={SetBorderRadius}
      />
    </div>
  );
};
