// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.
import { useState, useEffect } from "react";
import { fakeFetch } from "../6-Tweets/fakeFetch";

export const Tweets = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fakeFetch("https://example.com/api/usertweets");
    if (response.status === 200) {
      setData(response.data);
    } else if (response.status === 404) {
      alert("Error:tweets not found.");
    } else alert("Error Occured.!!");
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className="Tweets Main">
      <button className="Tweets filterBtn">
        Show Tweets with more than 50 Likes{" "}
      </button>
      <button className="Tweets filterBtn">Show All Tweets </button>
      <ul className="Tweets List">
        {data.map(tweet => {
          return (
            <li
              style={{
                listStyle: "none",
                border: "3px solid aqua",
                margin: "10px"
              }}
            >
              <h2 className="ListItem">{tweet.content}</h2>
              <p className="LikesViews">{`Likes: ${tweet.likes}        Views: ${tweet.views}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
