import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👇": "Backhand Index Pointing Down",
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "❤": "Red Heart",
};
var emojisKnow = object.keys(emojiDictionary);

export default function App() {



  const { meaning, setMeaning } = useState("");

  function emojiInputHandler(event) {
      var userInput = event.target.value;
    var meaning = emojiDictionary[userInput]
    if (meaning===undefined) {
        meaning = "We don't have this in our database";
    }

    setMeaning(meaning);  

}

function emojiOnClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning)
}
  return (
    <div className="App">
      <h1> Emoji| Translator</h1>

      <input onChange={emojiInputHandler}></input>
      <div>{meaning} </div>
      <h3> Emojis we know </h3>
        {emojisKnow.map(function(emoji) {
            return <span
            onClick={() => emojiOnClickHandler(emoji)} 
            style={{fontSize: "2rem", padding: "0.5rem", pointer: "cursor"}} 
            key={emoji}>
                {emoji}
                </span>
        })}




    </div>
  );
}
