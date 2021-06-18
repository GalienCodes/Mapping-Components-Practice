import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function creatingEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      img={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  // console.log(emojipedia);
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(creatingEntry)}
      {/* <Entry 
      name = {emojipedia[0].name} 
      img={emojipedia[0].emoji} 
      meaning ={emojipedia[0].meaning} 
       />
       <Entry 
      name = {emojipedia[1].name} 
      img={emojipedia[1].emoji} 
      meaning ={emojipedia[1].meaning} 
       />
       <Entry 
      name = {emojipedia[2].name} 
      img={emojipedia[2].emoji} 
      meaning ={emojipedia[2].meaning} 
       /> */}
    </div>
  );
}

export default App;
