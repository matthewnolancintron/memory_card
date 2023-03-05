import React from 'react';
import CardSection from './components/CardSection.jsx';
import TopSection from './components/TopSection.jsx'
import shapesArray from './shapes.js'

export default function App() {
  const [shapes, setShapes] = React.useState(shapesArray);
  const [selectedCardIds, setSelectedCardIds] = React.useState([]);
  const [bestScore,setBestScore] = React.useState(0);
  const [score, setScore] = React.useState(0);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleCardSelection(cardId){
    const shuffledShapes = shuffleArray(shapes);
    if (selectedCardIds.includes(cardId)){
      setBestScore(score > bestScore ? score:bestScore) 
      setSelectedCardIds([])
      setScore(0)
    } else {
      setSelectedCardIds(prev=>[...prev,cardId]);
      setScore(prev=>prev+1);
    }
    setShapes(shuffledShapes);
  }
  
  return (
    <div className="App">
      <TopSection className="topSection" score={score} bestScore={bestScore}/>
      <CardSection shapes={shapes} handleCardSelection={handleCardSelection} />
    </div>
  );
}