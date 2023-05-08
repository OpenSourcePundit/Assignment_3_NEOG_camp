// Create a select dropdown that updates the background color of the page when a new color is selected.
import { useState } from "react";

export const SetBackground = () => {
  let [BGColor, setBGColor] = useState();
  const BGColorHandler = () => {
    setBGColor(event.target.value);
  };
  return (
    <div
      className="SetBackground Main"
      style={{ backgroundColor: `${BGColor}`, padding: "15px" }}
    >
      <h2 className="SetBackgroundColor heading">Set Background Color</h2>
      <select name="Color" id="SelectColor" onChange={BGColorHandler}>
        <option value="white">White</option>
        <option value="pink">Pink</option>
        <option value="tomato">Tomato</option>
        <option value="aquamarine">Aqua Marine</option>
      </select>
    </div>
  );
};
