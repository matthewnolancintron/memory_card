import React from 'react';
import CardSection from './components/CardSection.jsx';
import TopSection from './components/TopSection.jsx'
import shapesArray from './shapes.js'

export default function App() {
  const [shapes, setShapes] = React.useState(shapesArray);
  
  return (
    <div className="App">
      <TopSection className="topSection"/>
      <CardSection shapes={shapes} />
    </div>
  );
}