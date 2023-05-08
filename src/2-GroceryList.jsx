// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
import { useState } from "react";
import { React } from "react";

export const GroceryList = () => {
  let itemName;
  let [list, setList] = useState([]);
  let [completedList, setCompletedList] = useState([]);

  const AddItem = () => {
    if (itemName !== undefined) setList([...list, itemName]);
    console.log(list);
  };

  const AddToCompleted = () => {
    // console.log(event.target.value);
    setCompletedList([...completedList, event.target.value]);
    setList(
      list.filter(obj => {
        return obj !== event.target.value;
      })
    );
  };

  return (
    <div className="GroceryList Main">
      <h2 className="GroceryList Heading">Grocery List</h2>
      Add Item:
      <input
        type="text"
        label="Add Item:"
        className="Input"
        id="ItemList"
        onChange={() => (itemName = event.target.value)}
      />
      <button className="AddItemBtn" onClick={AddItem}>
        Add
      </button>
      <div className="GroceryList SolutionScreen">
        <ul className="List">
          {list.map(item => {
            return (
              <ol className="ListItem">
                <input type="checkbox" value={item} onChange={AddToCompleted} />

                {item}
              </ol>
            );
          })}
        </ul>

        <h3 className="CompletedListHeading">Completed List</h3>
        <ul className="CompletedList">
          {completedList.map(item => {
            return <ol className="CompletedListItem">{item}</ol>;
          })}
        </ul>
      </div>
    </div>
  );
};
