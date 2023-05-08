// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.
import { useState, useEffect } from "react";
import { fakeFetch } from "../5-ChatRoom/fakefetch";
export const ChatRoom = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fakeFetch("https://example.com/api/userchats");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  // useEffect(getData);
  return (
    <div className="ChatRoom Main">
      <h2 className="ChatRoom heading">Chat Room</h2>
      <ol className="ChatList">
        {data.map((chat, index) => {
          return (
            <li style={{ listStyle: "none" }}>
              {index % 2 === 0 ? "User:" + chat : "You:" + chat}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
