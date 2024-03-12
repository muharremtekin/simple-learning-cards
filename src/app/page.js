'use client';
import FlippableCard from "../components/flippable_card/flippable-card.js";
import "./page.css";
import EnCard from "../components/encard.js";
import { useState } from "react";



export default function Home() {

  const newWords = [
    new EnCard("also", "ayrıca", "I am also happy"),
    new EnCard("away", "uzak", "He's far away"),
    new EnCard("example", "örnek", "This is an example")
  ];

  const [selectedWordIndex, setSelectedWordIndex] = useState(0);

  const handleNextWord = () => {
    // Rastgele bir kelime seçmek için rastgele bir indeks oluştur
    const randomIndex = Math.floor(Math.random() * newWords.length);
    setSelectedWordIndex(randomIndex);
  };

  return (
    <div className="Home">
      <button onClick={handleNextWord}>Next Word</button>
      <FlippableCard CardModel={newWords[selectedWordIndex]} ></FlippableCard>
    </div>
  );
}
