// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.
import { useState, useEffect } from "react";
import { fakeFetch } from "../6-Tweets/fakeFetch";

export const Tweets = () => {
  const [data, setData] = useState([]);
  let data1 = [];
  let showFilterBtn = true;
  let showAllBtn = true;

  const getData = async () => {
    const response = await fakeFetch("https://example.com/api/usertweets");
    if (response.status === 200) {
      data1 = response.data;
      setData(data1);
    } else if (response.status === 404) {
      alert("Error:tweets not found.");
    } else alert("Error Occured.!!");
  };
  // here when i used getData even after button click the rerendering was happening.
  //again and again. Whn useEffect was removed.and data1 was initialised in useState declaration,
  // then data worked normal.
  useEffect(() => {
    getData();
  });

  const FilterTweets = () => {
    showFilterBtn = false;
    showAllBtn = true;
    setData(data1.filter(tweet => tweet.likes > 50));
  };
  const ShowAllTweets = () => {
    showFilterBtn = true;
    showAllBtn = false;
    setData(data1);
  };

  return (
    <div className="Tweets Main">
      <button
        className="Tweets filterBtn"
        onClick={FilterTweets}
        style={{ visibility: showFilterBtn === true ? "visible" : "hidden" }}
      >
        Show Tweets with more than 50 Likes{" "}
      </button>
      <button
        className="Tweets filterBtn"
        onClick={ShowAllTweets}
        style={{ visibility: showAllBtn === true ? "visible" : "hidden" }}
      >
        Show All Tweets{" "}
      </button>
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
