'use client';
import FlippableCard from "../components/flippable_card/flippable-card.js";
import "./page.css";
import EnCard from "../components/encard.js";


export default function Home() {

  const newWord = new EnCard("also", "ayrıca", "I am also happy.");

  return (
    <div className = "Home">
        <FlippableCard newCard={newWord}/>
    </div>
  );
}
