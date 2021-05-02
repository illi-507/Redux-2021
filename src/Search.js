import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function Search() {
  const defaultPost = [
    { id: "1", name: "Invoker" },
    { id: "2", name: "Lone Druid" },
    { id: "3", name: "Outworld devourer" },
    { id: "4", name: "Faceless void" },
  ];
  const [posts, setPosts] = useState(defaultPost);
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
    let userInput = event.target.value;
    let temp = defaultPost;
    temp =temp.filter((item)=> item.name.toLowerCase().includes(userInput));
    setPosts([...temp]);
  }
  return (
    <div className="App">
      <input onChange={handleChange}></input>

      <div className="list-container">
        {posts.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
}

export default Search;
